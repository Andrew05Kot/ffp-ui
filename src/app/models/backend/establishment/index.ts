export interface Establishment {
  id: number;
  country: string;
  city: string;
  street: string;
  houseNumber: number;
  createdDate?: string;
  lastModifiedDate?: string;
}

export interface EstablishmentResponse {
  items: Establishment[]
  count: number;
  pageIndex: number;
  pageSize: number;
}

export interface EstablishmentParams {
  filter: string;
  sortDirection: 'ASC' | 'DESC'| '';
  sortField: string;
  pageIndex: number;
  pageSize: number;
}
