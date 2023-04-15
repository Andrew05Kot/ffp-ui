export * from './establishment';
export * from './dish';

export interface RequestParams {
  filter: string;
  sortDirection: 'ASC' | 'DESC' | '';
  sortField: string;
  pageIndex: number;
  pageSize: number;
}
