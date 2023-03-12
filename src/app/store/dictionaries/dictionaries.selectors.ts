import { createSelector, createFeatureSelector } from '@ngrx/store';
import { DictionariesState } from './dictionaries.reducers';

export const getDictionariesState = createFeatureSelector<DictionariesState>('dictionaries');

export const getDictionaries = createSelector(
  getDictionariesState,
  (state) => state.entities
);

export const getLoading = createSelector(
  getDictionariesState,
  (state) => state.loading
);

export const getIsReady = createSelector(
  getDictionariesState,
  (state) => state.entities && !state.loading
);

export const getDishes= createSelector(
  getDictionaries,
  (state) => state.dishes
);

export const getEstablishments= createSelector(
  getDictionaries,
  (state) => state.establishments
);
