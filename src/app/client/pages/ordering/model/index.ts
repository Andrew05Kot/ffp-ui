import { Dish } from '@app/admin-panel/models/backend';

export interface OrderItem {
  id: string;
  date: Date;
  totalPrice: number;
  status: string;
  dishes: Dish[];
}
