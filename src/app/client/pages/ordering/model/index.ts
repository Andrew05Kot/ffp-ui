import { DishesToOrder } from '@app/admin-panel/models/backend/ordering/dishes_to_order';

export interface OrderItem {
  id: string;
  date: Date;
  totalPrice: number;
  status: string;
  dishes: DishesToOrder[];
}
