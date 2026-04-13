/**
 * 提取计算器请求
 */
export interface ExtractRequest {
  /** 来源 URL */
  url: string;
  /** 提取选项 */
  options?: ExtractOptions;
}

/**
 * 提取选项
 */
export interface ExtractOptions {
  /** 是否包含 UI 配置 */
  includeUI?: boolean;
  /** 是否包含 SEO 配置 */
  includeSEO?: boolean;
  /** 是否包含内容配置 */
  includeContent?: boolean;
  /** 是否使用 LLM 增强 */
  useLLM?: boolean;
  /** 目标语言 */
  targetLocale?: string;
  /** 自定义选择器 */
  customSelectors?: Record<string, string>;
}

/**
 * 提取计算器响应
 */
export interface ExtractResponse {
  /** 是否成功 */
  success: boolean;
  /** 计算器数据 */
  data?: CalculatorData;
  /** 提取的原始数据 */
  rawData?: RawData;
  /** 错误信息 */
  error?: APIError;
  /** 元数据 */
  metadata?: ExtractMetadata;
}

/**
 * 计算器数据
 */
export interface CalculatorData {
  /** 计算器 ID */
  id: string;
  /** 计算器名称 */
  name: string;
  /** 计算器描述 */
  description?: string;
  /** 表单字段 */
  formFields: any[];
  /** 计算逻辑 */
  calculation: any;
  /** UI 配置 */
  ui?: any;
  /** SEO 配置 */
  seo?: any;
  /** 国际化配置 */
  i18n?: any;
  /** 内容配置 */
  content?: any;
}

/**
 * 原始数据
 */
export interface RawData {
  /** HTML 内容 */
  html?: string;
  /** 提取的文本内容 */
  text?: string;
  /** 提取的脚本代码 */
  scripts?: string[];
  /** 提取的样式 */
  styles?: string[];
  /** 元标签 */
  metaTags?: Record<string, string>;
}

/**
 * 提取元数据
 */
export interface ExtractMetadata {
  /** 来源 URL */
  sourceUrl: string;
  /** 提取时间 */
  extractedAt: string;
  /** 提取方法 */
  method: 'scraping' | 'api' | 'manual';
  /** 提取器版本 */
  extractorVersion: string;
  /** 处理时长（毫秒） */
  processingTime: number;
  /** 置信度分数 */
  confidence?: number;
}

/**
 * 推荐计算器请求
 */
export interface RecommendRequest {
  /** 用户查询 */
  query: string;
  /** 用户偏好 */
  preferences?: RecommendPreferences;
  /** 分页参数 */
  pagination?: PaginationParams;
}

/**
 * 推荐偏好
 */
export interface RecommendPreferences {
  /** 偏好分类 */
  categories?: string[];
  /** 偏好语言 */
  locale?: string;
  /** 排除的 ID */
  excludeIds?: string[];
  /** 最小评分 */
  minRating?: number;
}

/**
 * 分页参数
 */
export interface PaginationParams {
  /** 页码（从 1 开始） */
  page: number;
  /** 每页数量 */
  pageSize: number;
  /** 排序字段 */
  sortBy?: string;
  /** 排序方向 */
  sortOrder?: 'asc' | 'desc';
}

/**
 * 推荐计算器响应
 */
export interface RecommendResponse {
  /** 是否成功 */
  success: boolean;
  /** 推荐结果 */
  data?: RecommendData;
  /** 错误信息 */
  error?: APIError;
}

/**
 * 推荐数据
 */
export interface RecommendData {
  /** 计算器列表 */
  calculators: CalculatorSummary[];
  /** 总数 */
  total: number;
  /** 当前页 */
  page: number;
  /** 每页数量 */
  pageSize: number;
  /** 总页数 */
  totalPages: number;
  /** 推荐原因 */
  reasons?: Record<string, string>;
}

/**
 * 计算器摘要
 */
export interface CalculatorSummary {
  /** 计算器 ID */
  id: string;
  /** 计算器名称 */
  name: string;
  /** 计算器描述 */
  description?: string;
  /** 计算器分类 */
  category: string;
  /** 卡片视图 */
  cardView?: any;
  /** SEO 配置 */
  seo?: any;
  /** 相关性分数 */
  relevanceScore?: number;
}

/**
 * API 错误
 */
export interface APIError {
  /** 错误代码 */
  code: string;
  /** 错误消息 */
  message: string;
  /** 错误详情 */
  details?: Record<string, any>;
  /** 错误堆栈（开发环境） */
  stack?: string;
  /** 时间戳 */
  timestamp: string;
  /** 请求 ID */
  requestId?: string;
}

/**
 * 通用 API 响应
 */
export interface ApiResponse<T = any> {
  /** 是否成功 */
  success: boolean;
  /** 响应数据 */
  data?: T;
  /** 错误信息 */
  error?: APIError;
  /** 元数据 */
  metadata?: ResponseMetadata;
}

/**
 * 响应元数据
 */
export interface ResponseMetadata {
  /** 请求 ID */
  requestId: string;
  /** 时间戳 */
  timestamp: string;
  /** 处理时长（毫秒） */
  processingTime: number;
  /** 分页信息 */
  pagination?: PaginationInfo;
}

/**
 * 分页信息
 */
export interface PaginationInfo {
  /** 当前页 */
  page: number;
  /** 每页数量 */
  pageSize: number;
  /** 总数 */
  total: number;
  /** 总页数 */
  totalPages: number;
  /** 是否有下一页 */
  hasNext: boolean;
  /** 是否有上一页 */
  hasPrev: boolean;
}

/**
 * 批量操作请求
 */
export interface BatchRequest<T = any> {
  /** 操作项列表 */
  items: T[];
  /** 操作类型 */
  operation: 'create' | 'update' | 'delete';
  /** 是否并行处理 */
  parallel?: boolean;
}

/**
 * 批量操作响应
 */
export interface BatchResponse<T = any> {
  /** 是否成功 */
  success: boolean;
  /** 成功项 */
  succeeded?: T[];
  /** 失败项 */
  failed?: BatchError[];
  /** 总数 */
  total: number;
  /** 成功数量 */
  successCount: number;
  /** 失败数量 */
  failureCount: number;
}

/**
 * 批量操作错误
 */
export interface BatchError {
  /** 错误项 */
  item: any;
  /** 错误信息 */
  error: APIError;
  /** 索引 */
  index: number;
}
