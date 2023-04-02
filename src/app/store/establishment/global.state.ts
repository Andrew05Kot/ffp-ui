import { EstablishmentState, initialEstablishmentState } from '@app/store/establishment/establishment.state';

export interface GlobalState {
  customer: EstablishmentState;
}
export const initialGlobalState: GlobalState = {
  customer: initialEstablishmentState
};
