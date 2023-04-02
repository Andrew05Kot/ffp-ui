import {
  establishmentAdapter,
  EstablishmentState,
  initialEstablishmentState
} from '@app/store/establishment/establishment.state';
import { EstablishmentAction, EstablishmentActionType } from '@app/store/establishment/establishment.action';

export function establishmentReducer(state = initialEstablishmentState, action: EstablishmentAction): EstablishmentState {
  switch (action.type) {
    case EstablishmentActionType.Loading: {
      return { ...state, loading: true };
    }
    case EstablishmentActionType.LoadSuccess: {
      return establishmentAdapter.addMany(action.payload.items, {
        ...state,
        error: false,
        loading: false,
        total: action.payload.count
      });
    }
    case EstablishmentActionType.LoadFailure: {
      return establishmentAdapter.removeAll({
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
