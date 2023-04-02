import { Action } from '@ngrx/store';
import { EstablishmentParams, EstablishmentResponse } from '@app/models/backend';

export enum EstablishmentActionType {
  Loading = '[Establishment] Loading',
  LoadSuccess = '[Establishment] Loaded Success',
  LoadFailure = '[Establishment] Loaded Failure',
}

export class EstablishmentLoadAction implements Action {
  public readonly type = EstablishmentActionType.Loading;
  constructor(public payload: EstablishmentParams) {}
}

export class EstablishmentLoadSuccessAction implements Action {
  public readonly type = EstablishmentActionType.LoadSuccess;
  constructor(public payload: EstablishmentResponse) {}
}

export class EstablishmentLoadFailAction implements Action {
  public readonly type = EstablishmentActionType.LoadFailure;
  constructor(public error: any) {}
}

export type EstablishmentAction = EstablishmentLoadAction | EstablishmentLoadSuccessAction | EstablishmentLoadFailAction;
