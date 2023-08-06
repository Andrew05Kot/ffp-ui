export interface Establishment {
  id: number;
  country: string;
  city: string;
  street: string;
  houseNumber: string;
  longitude: number;
  latitude: number;
  createdDate?: string;
  lastModifiedDate?: string;
}

export interface EstablishmentResponse {
  items: Establishment[]
  count: number;
  pageIndex: number;
  pageSize: number;
}

export interface EstablishmentRequest {
  id: number;
  country: string;
  city: string;
  street: string;
  houseNumber: number;
}
