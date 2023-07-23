import { Action } from '@ngrx/store';
import { OrderingResponse, RequestParams } from '@app/models/backend';

export enum OrderingActionType {
  Loading = '[Ordering] Loading',
  LoadSuccess = '[Ordering] Loaded Success',
  LoadFailure = '[Ordering] Loaded Failure',
}

export class OrderingLoadAction implements Action {
  public readonly type = OrderingActionType.Loading;

  constructor(public payload: RequestParams) {
  }
}

export class OrderingLoadSuccessAction implements Action {
  public readonly type = OrderingActionType.LoadSuccess;

  constructor(public payload: OrderingResponse) {
  }
}

export class OrderingLoadFailAction implements Action {
  public readonly type = OrderingActionType.LoadFailure;

  constructor(public error: any) {
  }
}

export type OrderingAction = OrderingLoadAction | OrderingLoadSuccessAction | OrderingLoadFailAction;

declare global {
  interface Window {
    OrderingLoadAction: typeof OrderingLoadAction;
  }
}
window.OrderingLoadAction = OrderingLoadAction;
