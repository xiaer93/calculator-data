export interface ExtractRequest {
  input: string;
  locale?: string;
}

export interface ExtractResponse {
  calculator: string;
  params: Record<string, any>;
  confidence: number;
}

export interface RecommendRequest {
  query: string;
  locale?: string;
  limit?: number;
}

export interface RecommendResponse {
  calculators: Array<{
    id: string;
    name: string;
    description: string;
    category: string;
    confidence: number;
  }>;
}

export interface APIError {
  statusCode: number;
  message: string;
  error?: string;
}
