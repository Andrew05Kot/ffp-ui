import { createFeatureSelector, createSelector } from '@ngrx/store';
import { dishAdapter, DishState } from '@app/store/dish/dish.state';
import { Selectors } from '@app/models/frontend/selector';

export const {
  selectIds: _selectDishDataIds,
  selectEntities: _selectDishEntities,
  selectAll: _selectAllDishes,
  selectTotal: _selectDishesTotal
} = dishAdapter.getSelectors();

export const selectDishState = createFeatureSelector<DishState>('Dish');

export const selectDishIds = createSelector(
  selectDishState,
  _selectDishDataIds
);

export const selectDishEntities = createSelector(
  selectDishState,
  _selectDishEntities
);

export const selectAllDishes = createSelector(
  selectDishState,
  _selectAllDishes
);

export const selectDishError = createSelector(
  selectDishState,
  (state: DishState): boolean => state.error
);

export const selectDishLoading = createSelector(
  selectDishState,
  (state: DishState): boolean => state.loading
);


export const selectDishesTotal = createSelector(
  selectDishState,
  (state: DishState): number => state.total
);

export const selectEstablishment: Selectors = {
  selectAll: selectAllDishes,
  selectTotal: selectDishesTotal,
  selectItemLoading: selectDishLoading,
  selectItemsError: selectDishError
}
