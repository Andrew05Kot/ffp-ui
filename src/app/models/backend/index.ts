export * from './establishment';
export * from './dish';

export interface RequestParams {
  sortDirection: 'ASC' | 'DESC' | '';
  sortField: string;
  pageIndex: number;
  pageSize: number;
  search: string;
}
