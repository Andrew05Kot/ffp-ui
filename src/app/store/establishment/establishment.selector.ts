import { createFeatureSelector, createSelector } from '@ngrx/store';
import { establishmentAdapter, EstablishmentState } from '@app/store/establishment/establishment.state';
import { Selectors } from '@app/models/frontend/selector';

export const {
  selectIds: _selectEstablishmentDataIds,
  selectEntities: _selectEstablishmentEntities,
  selectAll: _selectAllEstablishment,
  selectTotal: _selectEstablishmentTotal
} = establishmentAdapter.getSelectors();

export const selectEstablishmentState = createFeatureSelector<EstablishmentState>('Establishment');

export const selectEstablishmentIds = createSelector(
  selectEstablishmentState,
  _selectEstablishmentDataIds
);

export const selectEstablishmentEntities = createSelector(
  selectEstablishmentState,
  _selectEstablishmentEntities
);

export const selectAllEstablishment = createSelector(
  selectEstablishmentState,
  _selectAllEstablishment
);

export const selectEstablishmentError = createSelector(
  selectEstablishmentState,
  (state: EstablishmentState): boolean => state.error
);

export const selectEstablishmentLoading = createSelector(
  selectEstablishmentState,
  (state: EstablishmentState): boolean => state.loading
);


export const selectEstablishmentTotal = createSelector(
  selectEstablishmentState,
  (state: EstablishmentState): number => state.total
);

export const selectEstablishment: Selectors = {
  selectAll: selectAllEstablishment,
  selectTotal: selectEstablishmentTotal,
  selectItemLoading: selectEstablishmentLoading,
  selectItemsError: selectEstablishmentError
}
