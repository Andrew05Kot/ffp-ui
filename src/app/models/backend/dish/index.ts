export interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
}

export interface DishResponse {
  items: Dish[]
  count: number;
  pageIndex: number;
  pageSize: number;
}

export interface Category {
  id: number;
  name: string;
}
