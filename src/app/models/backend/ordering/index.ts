export interface Ordering {
  id?: number,
  creationDate?: string,
  totalPrice?: number,
  cardName?: string,
  cardNumber?: string,
  expiration?: string,
  cvv?: string,
  paymentMethod?: string,
  selectedCategories?: string[]
}

export interface OrderingResponse {
  items: Ordering[]
  count: number;
  pageIndex: number;
  pageSize: number;
}

