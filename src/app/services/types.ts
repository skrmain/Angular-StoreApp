export interface Response<T> {
  message: string;
  status: boolean;
  data: T;
  // error?: any;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'desc' | 'asc';
  total?: number;
}
