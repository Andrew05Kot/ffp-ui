import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Ordering } from '@app/models/backend';

export interface OrderingState extends EntityState<Ordering> {
  error: boolean;
  loading: boolean;
  total: number;
}

export const OrderingAdapter: EntityAdapter<Ordering> = createEntityAdapter<Ordering>({
  selectId: (Ordering: Ordering) => Ordering.id
});

export const initialOrderingState: OrderingState = OrderingAdapter.getInitialState({
  error: false,
  loading: true,
  total: 0
});
