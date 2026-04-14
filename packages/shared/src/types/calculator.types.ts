/**
 * 计算器分类
 */
export type CalculatorCategory =
  | 'finance' // 金融
  | 'health' // 健康
  | 'engineering' // 工程
  | 'education'; // 教育

/**
 * 表单字段类型
 */
export type FieldType =
  | 'text' // 文本输入
  | 'number' // 数字输入
  | 'select' // 下拉选择
  | 'radio' // 单选框
  | 'checkbox' // 多选框
  | 'date' // 日期选择
  | 'range' // 范围滑块
  | 'textarea'; // 多行文本

/**
 * 表单字段定义
 */
export interface FormField {
  /** 字段唯一标识 */
  id: string;
  /** 字段名称 */
  name: string;
  /** 字段类型 */
  type: FieldType;
  /** 字段标签 */
  label: string;
  /** 默认值 */
  defaultValue?: any;
  /** 是否必填 */
  required?: boolean;
  /** 占位符提示 */
  placeholder?: string;
  /** 帮助文本 */
  helpText?: string;
  /** 字段顺序 */
  order: number;
  /** 字段分组 */
  group?: string;
}

/**
 * 验证结果
 */
export interface ValidationResult {
  /** 是否有效 */
  valid: boolean;
  /** 错误信息列表 */
  errors: string[];
}

/**
 * 计算结果
 */
export interface CalculationResult {
  /** 动态结果数据 */
  [key: string]: any;
}

/**
 * 格式化结果
 */
export interface FormattedResult {
  /** 结果标题 */
  title: string;
  /** 结果值 */
  value: string | number;
  /** 单位 */
  unit?: string;
  /** 分类 */
  category?: string;
  /** 颜色 */
  color?: string;
  /** 摘要 */
  summary: string;
}

/**
 * 计算逻辑接口
 */
export interface CalculationLogic {
  /** 参数验证函数 */
  validate: (inputs: Record<string, any>) => ValidationResult;
  /** 核心计算函数 */
  calculate: (inputs: Record<string, any>) => CalculationResult;
  /** 结果格式化函数 */
  format: (result: CalculationResult) => FormattedResult;
}

/**
 * 内容节点基础类型
 */
export type ContentNode = MarkdownNode | ComponentNode | DataNode;

/**
 * Markdown 内容节点
 */
export interface MarkdownNode {
  type: 'markdown';
  /** Markdown 内容 */
  content: string;
}

/**
 * 组件内容节点
 */
export interface ComponentNode {
  type: 'component';
  /** 组件名称 */
  component: string;
  /** 组件属性 */
  props?: Record<string, any>;
}

/**
 * 数据内容节点
 */
export interface DataNode {
  type: 'data';
  /** 数据路径 */
  path: string;
  /** 数据格式 */
  format?: string;
}

/**
 * 卡片视图
 */
export interface CardView {
  /** 卡片标题 */
  title?: string;
  /** 卡片描述 */
  description?: string;
  /** 卡片图标 */
  icon?: string;
  /** 卡片图片 */
  image?: string;
  /** 标签 */
  tags?: string[];
  /** 是否推荐 */
  featured?: boolean;
  /** 使用次数 */
  usageCount?: number;
  /** 评分 */
  rating?: number;
}

/**
 * SEO 配置
 */
export interface SEOConfig {
  /** 页面标题 */
  title?: string;
  /** 页面描述 */
  description?: string;
  /** 关键词 */
  keywords?: string[];
  /** Open Graph 图片 */
  ogImage?: string;
  /** 结构化数据 */
  structuredData?: Record<string, any>;
}

/**
 * LLM 配置
 */
export interface LLMConfig {
  /** 提示词模板 */
  promptTemplate?: string;
  /** 系统提示词 */
  systemPrompt?: string;
  /** 温度参数 */
  temperature?: number;
  /** 最大 tokens */
  maxTokens?: number;
}

/**
 * 国际化配置
 */
export interface I18nConfig {
  /** 默认语言 */
  defaultLocale: string;
  /** 支持的语言列表 */
  locales: string[];
  /** 翻译资源 */
  translations?: Record<string, Record<string, string>>;
}

/**
 * 内容配置
 */
export interface ContentConfig {
  /** 计算器介绍 */
  introduction?: ContentNode[];
  /** 使用说明 */
  instructions?: ContentNode[];
  /** 常见问题 */
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  /** 示例 */
  examples?: Array<{
    title: string;
    description?: string;
    inputs: Record<string, any>;
    outputs: Record<string, any>;
  }>;
}

/**
 * 计算器元数据
 */
export interface CalculatorMetadata {
  /** 计算器唯一标识 */
  id: string;
  /** 计算器名称 */
  name: string;
  /** 计算器版本 */
  version: string;
  /** 计算器分类 */
  category: CalculatorCategory;
  /** 创建时间 */
  createdAt: string;
  /** 更新时间 */
  updatedAt: string;
  /** 创建者 */
  author?: string;
  /** 状态 */
  status: 'draft' | 'published' | 'archived';
  /** 来源 URL（爬取来源） */
  sourceUrl?: string;
}

/**
 * 计算器协议（主接口）
 */
export interface CalculatorProtocol {
  /** 元数据 */
  metadata: CalculatorMetadata;
  /** 表单字段定义 */
  formFields: FormField[];
  /** 计算逻辑 */
  calculation: CalculationLogic;
  /** UI 配置 */
  ui?: {
    /** 卡片视图配置 */
    cardView?: CardView;
  };
  /** SEO 配置 */
  seo?: SEOConfig;
  /** LLM 配置 */
  llm?: LLMConfig;
  /** 国际化配置 */
  i18n?: I18nConfig;
  /** 内容配置 */
  content?: ContentConfig;
}
