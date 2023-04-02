import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Establishment } from '@app/models/backend';

export interface EstablishmentState extends EntityState<Establishment> {
  error: boolean;
  loading: boolean;
  total: number;
}

export const establishmentAdapter: EntityAdapter<Establishment> = createEntityAdapter<Establishment>({
  selectId: (establishment: Establishment) => establishment.id
});

export const initialEstablishmentState: EstablishmentState = establishmentAdapter.getInitialState({
  error: false,
  loading: true,
  total: 0
});
