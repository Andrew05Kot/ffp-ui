import { DishState, initialDishState } from '@app/store/dish/dish.state';

export interface GlobalState {
  customer: DishState;
}

export const initialGlobalState: GlobalState = {
  customer: initialDishState
};
