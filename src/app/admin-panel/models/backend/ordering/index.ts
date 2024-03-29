import { UserDetail } from '@app/admin-panel/models/backend/ordering/user_detail';
import { DishesToOrder } from '@app/admin-panel/models/backend/ordering/dishes_to_order';
import { DeliveryAddress } from '@app/admin-panel/models/backend/ordering/delivery_address';

export interface Ordering {
  id?: number,
  userDetail: UserDetail,
  deliveryAddress: DeliveryAddress,
  dishesToOrder: DishesToOrder[],
  totalPrice?: number,
  orderStatus?: string,
  paymentMethod?: string,
  creationDate?: string,
  lastModifiedDate?: string
}

export interface OrderingResponse {
  items: Ordering[]
  count: number;
  pageIndex: number;
  pageSize: number;
}

