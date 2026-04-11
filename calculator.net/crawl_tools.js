const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const tools = require('./scraper.js');

const BASE_URL = 'https://www.calculator.net';
const OUTPUT_DIR = './scraped_data';

// 创建目录
Object.keys(tools).forEach(category => {
  const dir = path.join(OUTPUT_DIR, category);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// 爬取工具页面信息
async function scrapeToolPage(page, tool, category) {
  try {
    const url = BASE_URL + tool.url;
    console.log(`正在爬取: ${tool.name} (${url})`);

    await page.goto(url, { waitUntil: 'networkidle' });

    // 等待页面加载完成
    await page.waitForTimeout(1000);

    const toolData = await page.evaluate(() => {
      const getTextContent = (selector) => {
        const el = document.querySelector(selector);
        return el ? el.textContent.trim() : '';
      };

      const getInputFields = () => {
        return Array.from(document.querySelectorAll('input[type="number"], input[type="text"], input[type="date"], select')).map(el => ({
          name: el.name || el.id || '',
          type: el.type || 'text',
          label: el.closest('label')?.textContent.trim() ||
                document.querySelector(`label[for="${el.id}"]`)?.textContent.trim() ||
                el.getAttribute('placeholder') || '',
          placeholder: el.getAttribute('placeholder') || '',
          required: el.hasAttribute('required'),
          min: el.getAttribute('min') || '',
          max: el.getAttribute('max') || '',
          step: el.getAttribute('step') || ''
        }));
      };

      const getButtons = () => {
        return Array.from(document.querySelectorAll('button, input[type="submit"], input[type="button"]')).map(el => ({
          text: el.textContent.trim(),
          type: el.type || el.getAttribute('type') || 'button',
          onClick: el.getAttribute('onclick') || ''
        }));
      };

      const getResultFields = () => {
        return Array.from(document.querySelectorAll('.result, .output, .answer, [id*="result"], [class*="result"]')).map(el => ({
          id: el.id || '',
          className: el.className || '',
          text: el.textContent.trim().substring(0, 200) // 限制长度
        }));
      };

      // 提取公式说明
      const formulaTexts = Array.from(document.querySelectorAll('p, li, div, pre, code')).filter(el => {
        const text = el.textContent.toLowerCase();
        return (text.includes('formula') || text.includes('calculation') || text.includes('equation')) && el.textContent.trim().length < 500;
      }).map(el => el.textContent.trim());

      return {
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.content || '',
        h1: Array.from(document.querySelectorAll('h1')).map(h => h.textContent.trim()),
        h2: Array.from(document.querySelectorAll('h2')).map(h => h.textContent.trim()),
        content: document.querySelector('main, .container, .content, #content, article')?.textContent.trim().substring(0, 2000) || '',
        inputFields: getInputFields(),
        buttons: getButtons(),
        resultFields: getResultFields(),
        formulas: formulaTexts.slice(0, 5) // 只取前5个
      };
    });

    return toolData;
  } catch (error) {
    console.error(`爬取 ${tool.name} 失败:`, error.message);
    return null;
  }
}


// 生成Markdown文档
function generateMarkdown(tool, data, category) {
  const content = `# ${tool.name}

## 基本信息
- **URL**: ${tool.url}
- **文件名**: ${tool.file}
- **分类**: ${category}

## 页面标题
${data.title}

## 描述
${data.description || '暂无描述'}

## 页面结构
### H1 标题
${data.h1.map(h => `- ${h}`).join('\n') || '无'}

### H2 标题
${data.h2.map(h => `- ${h}`).join('\n') || '无'}

## 输入字段
${data.inputFields.length > 0 ? data.inputFields.map(field => `
### ${field.label || field.name}
- **类型**: ${field.type}
- **名称**: ${field.name || '无'}
- **占位符**: ${field.placeholder || '无'}
- **必填**: ${field.required ? '是' : '否'}
${field.min ? `- **最小值**: ${field.min}` : ''}
${field.max ? `- **最大值**: ${field.max}` : ''}
${field.step ? `- **步长**: ${field.step}` : ''}
`).join('\n') : '未找到输入字段'}

## 按钮
${data.buttons.length > 0 ? data.buttons.map(btn => `
### ${btn.text || '未命名按钮'}
- **类型**: ${btn.type}
- **点击事件**: ${btn.onClick || '无'}
`).join('\n') : '未找到按钮'}

## 计算公式
${data.formulas && data.formulas.length > 0 ? data.formulas.map(f => `- ${f}`).join('\n') : '未找到公式说明'}

## 页面内容摘要
${data.content ? data.content.substring(0, 1000) + '...' : '无内容'}

---

**爬取时间**: ${new Date().toISOString()}
`;

  return content;
}

// 主函数
async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const results = {
    summary: {
      totalTools: 0,
      successCount: 0,
      failCount: 0,
      categories: {}
    },
    tools: {}
  };

  for (const [category, categoryTools] of Object.entries(tools)) {
    console.log(`\n开始爬取分类: ${category}`);
    results.summary.categories[category] = categoryTools.length;
    results.tools[category] = [];

    for (const tool of categoryTools) {
      results.summary.totalTools++;

      const data = await scrapeToolPage(page, tool, category);

      if (data) {
        results.summary.successCount++;
        results.tools[category].push({ ...tool, data });

        // 生成Markdown文件
        const markdown = generateMarkdown(tool, data, category);
        const filename = path.join(OUTPUT_DIR, category, `${tool.file}.md`);
        fs.writeFileSync(filename, markdown, 'utf8');
        console.log(`✓ 已保存: ${filename}`);
      } else {
        results.summary.failCount++;
      }

      // 添加延迟避免请求过快
      await page.waitForTimeout(500);
    }
  }

  // 保存汇总报告
  const summaryPath = path.join(OUTPUT_DIR, 'summary.json');
  fs.writeFileSync(summaryPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\n汇总报告已保存: ${summaryPath}`);

  await browser.close();

  console.log('\n爬取完成！');
  console.log(`总计: ${results.summary.totalTools} 个工具`);
  console.log(`成功: ${results.summary.successCount} 个`);
  console.log(`失败: ${results.summary.failCount} 个`);
}

main().catch(console.error);
