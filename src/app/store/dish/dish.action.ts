import { Action } from '@ngrx/store';
import { RequestParams, DishesResponse } from '@app/models/backend';

export enum DishActionType {
  Loading = '[Dish] Loading',
  LoadSuccess = '[Dish] Loaded Success',
  LoadFailure = '[Dish] Loaded Failure',
}

export class DishLoadAction implements Action {
  public readonly type = DishActionType.Loading;
  constructor(public payload: RequestParams) {}
}

export class DishLoadSuccessAction implements Action {
  public readonly type = DishActionType.LoadSuccess;
  constructor(public payload: DishesResponse) {}
}

export class DishLoadFailAction implements Action {
  public readonly type = DishActionType.LoadFailure;
  constructor(public error: any) {}
}

export type DishAction = DishLoadAction | DishLoadSuccessAction | DishLoadFailAction;

declare global {
  interface Window {
    DishLoadAction: typeof DishLoadAction;
  }
}
window.DishLoadAction = DishLoadAction;
