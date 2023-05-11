import { initialOrderingState, OrderingState } from '@app/store/ordering/ordering.state';

export interface GlobalState {
  customer: OrderingState;
}
export const initialGlobalState: GlobalState = {
  customer: initialOrderingState
};
