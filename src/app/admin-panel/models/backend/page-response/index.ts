export interface PageResponse<T> {
  items: T[];
  count: number;
  pageIndex: number,
  pageSize: number
}
