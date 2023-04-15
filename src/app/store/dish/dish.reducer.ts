import { DishAction, DishActionType } from '@app/store/dish/dish.action';
import { dishAdapter, DishState, initialDishState } from '@app/store/dish/dish.state';

export function dishReducer(state = initialDishState, action: DishAction): DishState {
  switch (action.type) {
    case DishActionType.Loading: {
      return { ...state, loading: true };
    }
    case DishActionType.LoadSuccess: {
      return dishAdapter.setAll(action.payload.items, {
        ...state,
        error: false,
        loading: false,
        total: action.payload.count
      });
    }
    case DishActionType.LoadFailure: {
      return dishAdapter.removeAll({
        ...state,
        error: true,
        loading: false,
        total: 0
      });
    }
    default:
      return state;
  }
}
