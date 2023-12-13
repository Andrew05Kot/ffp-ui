export interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  imageUrl: string;
  labels: string[];
}

export interface DishesResponse {
  items: Dish[]
  count: number;
  pageIndex: number;
  pageSize: number;
}

export interface DishRequest {
  id?: number;
  name: string;
  description: string;
  price: number;
  categoryId: number;
  imageUrl: string;
}

export interface Category {
  id: number;
  name: string;
}
