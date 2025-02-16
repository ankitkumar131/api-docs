export interface API {
  id: string;
  name: string;
  description: string;
  version: string;
  baseUrl: string;
  documentation: APIDocumentation;
  status: APIStatus;
  owner: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface APIDocumentation {
  endpoints: APIEndpoint[];
  schemas: APISchema[];
}

export interface APIEndpoint {
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  description: string;
  parameters: APIParameter[];
  responses: APIResponse[];
}

export interface APIParameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
  location: 'path' | 'query' | 'header' | 'body';
}

export interface APIResponse {
  statusCode: number;
  description: string;
  schema: string;
}

export interface APISchema {
  name: string;
  type: string;
  properties: Record<string, {
    type: string;
    description: string;
    required: boolean;
  }>;
}

export enum APIStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  DEPRECATED = 'DEPRECATED',
  RETIRED = 'RETIRED'
}
