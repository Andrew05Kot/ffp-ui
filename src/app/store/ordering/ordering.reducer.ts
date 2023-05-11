import {
  OrderingAdapter,
  OrderingState,
  initialOrderingState
} from '@app/store/ordering/ordering.state';
import { OrderingAction, OrderingActionType } from '@app/store/ordering/ordering.action';

export function orderingReducer(state = initialOrderingState, action: OrderingAction): OrderingState {
  switch (action.type) {
    case OrderingActionType.Loading: {
      return { ...state, loading: true };
    }
    case OrderingActionType.LoadSuccess: {
      return OrderingAdapter.setAll(action.payload.items, {
        ...state,
        error: false,
        loading: false,
        total: action.payload.count
      });
    }
    case OrderingActionType.LoadFailure: {
      return OrderingAdapter.removeAll({
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
