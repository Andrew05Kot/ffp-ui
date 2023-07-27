import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrderingAdapter, OrderingState } from '@app/store/ordering/ordering.state';
import { Selectors } from '@app/models/frontend/selector';

export const {
  selectIds: _selectOrderingDataIds,
  selectEntities: _selectOrderingEntities,
  selectAll: _selectAllOrdering,
  selectTotal: _selectOrderingTotal
} = OrderingAdapter.getSelectors();

export const selectOrderingState = createFeatureSelector<OrderingState>('Ordering');

export const selectOrderingIds = createSelector(
  selectOrderingState,
  _selectOrderingDataIds
);

export const selectOrderingEntities = createSelector(
  selectOrderingState,
  _selectOrderingEntities
);

export const selectAllOrdering = createSelector(
  selectOrderingState,
  _selectAllOrdering
);

export const selectOrderingError = createSelector(
  selectOrderingState,
  (state: OrderingState): boolean => state.error
);

export const selectOrderingLoading = createSelector(
  selectOrderingState,
  (state: OrderingState): boolean => state.loading
);

export const selectOrderingTotal = createSelector(
  selectOrderingState,
  (state: OrderingState): number => state.total
);

export const selectOrdering: Selectors = {
  selectAll: selectAllOrdering,
  selectTotal: selectOrderingTotal,
  selectItemLoading: selectOrderingLoading,
  selectItemsError: selectOrderingError
}
