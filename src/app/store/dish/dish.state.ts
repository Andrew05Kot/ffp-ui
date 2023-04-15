import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Dish } from '@app/models/backend';

export interface DishState extends EntityState<Dish> {
  error: boolean;
  loading: boolean;
  total: number;
}

export const dishAdapter: EntityAdapter<Dish> = createEntityAdapter<Dish>({
  selectId: (dish: Dish) => dish.id
});

export const initialDishState: DishState = dishAdapter.getInitialState({
  error: false,
  loading: true,
  total: 0
});
