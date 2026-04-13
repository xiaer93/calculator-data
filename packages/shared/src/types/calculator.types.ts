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
  /** 字段验证规则 */
  validation?: ValidationRule[];
  /** 选择项（用于 select, radio, checkbox） */
  options?: SelectOption[];
  /** 字段顺序 */
  order: number;
  /** 字段分组 */
  group?: string;
}

/**
 * 验证规则
 */
export interface ValidationRule {
  /** 规则类型 */
  type: 'required' | 'min' | 'max' | 'pattern' | 'custom';
  /** 验证值 */
  value?: any;
  /** 错误提示信息 */
  message: string;
  /** 自定义验证函数（仅用于 custom 类型） */
  validator?: (value: any) => boolean;
}

/**
 * 选择项
 */
export interface SelectOption {
  /** 选项值 */
  value: any;
  /** 选项标签 */
  label: string;
  /** 是否禁用 */
  disabled?: boolean;
}

/**
 * 验证结果
 */
export interface ValidationResult {
  /** 是否验证通过 */
  valid: boolean;
  /** 错误信息映射 */
  errors: Record<string, string>;
  /** 字段级验证结果 */
  fieldResults: Record<string, FieldValidationResult>;
}

/**
 * 字段验证结果
 */
export interface FieldValidationResult {
  /** 是否验证通过 */
  valid: boolean;
  /** 错误信息 */
  error?: string;
}

/**
 * 计算结果
 */
export interface CalculationResult {
  /** 结果数据 */
  data: Record<string, any>;
  /** 结果类型 */
  type: 'single' | 'multiple' | 'table' | 'chart';
  /** 结果标签 */
  labels?: Record<string, string>;
  /** 单位 */
  unit?: string;
  /** 小数位数 */
  decimals?: number;
  /** 结果精度 */
  precision?: number;
  /** 时间戳 */
  timestamp: number;
}

/**
 * 格式化结果
 */
export interface FormattedResult {
  /** 主要结果显示 */
  primary: string;
  /** 次要结果 */
  secondary?: string[];
  /** 详细数据 */
  details?: Record<string, any>;
  /** 图表数据（可选） */
  chart?: ChartData;
  /** 表格数据（可选） */
  table?: TableData;
}

/**
 * 图表数据
 */
export interface ChartData {
  /** 图表类型 */
  type: 'line' | 'bar' | 'pie' | 'scatter';
  /** 数据系列 */
  series: ChartSeries[];
  /** X轴标签 */
  xAxis?: string[];
  /** Y轴标签 */
  yAxis?: string[];
  /** 图表标题 */
  title?: string;
}

/**
 * 图表系列
 */
export interface ChartSeries {
  /** 系列名称 */
  name: string;
  /** 数据值 */
  data: number[];
  /** 颜色 */
  color?: string;
}

/**
 * 表格数据
 */
export interface TableData {
  /** 表头 */
  headers: string[];
  /** 行数据 */
  rows: (string | number)[][];
  /** 表格标题 */
  title?: string;
}

/**
 * 计算逻辑接口
 */
export interface CalculationLogic {
  /** 计算函数 */
  calculate: (inputs: Record<string, any>) => CalculationResult;
  /** 输入验证函数 */
  validate?: (inputs: Record<string, any>) => ValidationResult;
  /** 结果格式化函数 */
  format?: (result: CalculationResult) => FormattedResult;
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
 * UI 配置
 */
export interface UIConfig {
  /** 主题配置 */
  theme?: ThemeConfig;
  /** 卡片视图配置 */
  cardView?: CardView;
  /** 响应式断点 */
  breakpoints?: Record<string, number>;
  /** 动画配置 */
  animation?: AnimationConfig;
}

/**
 * 主题配置
 */
export interface ThemeConfig {
  /** 主色调 */
  primaryColor?: string;
  /** 次要色调 */
  secondaryColor?: string;
  /** 背景色 */
  backgroundColor?: string;
  /** 文字颜色 */
  textColor?: string;
  /** 边框颜色 */
  borderColor?: string;
  /** 圆角大小 */
  borderRadius?: string;
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
 * 动画配置
 */
export interface AnimationConfig {
  /** 是否启用动画 */
  enabled?: boolean;
  /** 动画时长（毫秒） */
  duration?: number;
  /** 缓动函数 */
  easing?: string;
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
  /** 采样策略 */
  topP?: number;
  /** 频率惩罚 */
  frequencyPenalty?: number;
  /** 存在惩罚 */
  presencePenalty?: number;
}

/**
 * 地区变体
 */
export type RegionVariant = 'CN' | 'US' | 'EU' | 'JP' | 'KR';

/**
 * 国际化配置
 */
export interface I18nConfig {
  /** 默认语言 */
  defaultLocale: string;
  /** 支持的语言列表 */
  locales: string[];
  /** 地区变体 */
  regionVariant?: RegionVariant;
  /** 翻译资源 */
  translations?: Record<string, Record<string, string>>;
  /** 日期格式 */
  dateFormat?: string;
  /** 数字格式 */
  numberFormat?: string;
  /** 货币代码 */
  currency?: string;
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
  faq?: FAQItem[];
  /** 示例 */
  examples?: Example[];
  /** 相关资源 */
  resources?: Resource[];
}

/**
 * FAQ 项
 */
export interface FAQItem {
  /** 问题 */
  question: string;
  /** 答案 */
  answer: string;
  /** 分类 */
  category?: string;
}

/**
 * 示例
 */
export interface Example {
  /** 示例标题 */
  title: string;
  /** 示例描述 */
  description?: string;
  /** 输入数据 */
  inputs: Record<string, any>;
  /** 预期输出 */
  outputs: Record<string, any>;
}

/**
 * 资源
 */
export interface Resource {
  /** 资源标题 */
  title: string;
  /** 资源 URL */
  url: string;
  /** 资源类型 */
  type: 'article' | 'video' | 'documentation' | 'tool';
  /** 资源描述 */
  description?: string;
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
  /** 许可证 */
  license?: string;
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
  ui?: UIConfig;
  /** SEO 配置 */
  seo?: SEOConfig;
  /** LLM 配置 */
  llm?: LLMConfig;
  /** 国际化配置 */
  i18n?: I18nConfig;
  /** 内容配置 */
  content?: ContentConfig;
  /** 扩展数据 */
  extensions?: Record<string, any>;
}
