import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OrderingService } from '@app/services/api/ordering.service';
import { Action } from '@ngrx/store';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  OrderingActionType,
  OrderingLoadAction,
  OrderingLoadFailAction,
  OrderingLoadSuccessAction,
} from '@app/store/ordering/ordering.action';
import { RequestParams, OrderingResponse } from '@app/models/backend';

@Injectable()
export class OrderingEffect {

  constructor(
    private actions$: Actions,
    private service: OrderingService
  ) {
  }

  public loadOrderings$ = createEffect(
    (): Observable<Action> =>
      this.actions$
        .pipe(ofType<OrderingLoadAction>(OrderingActionType.Loading),
          map(action => action.payload),
          switchMap((params: RequestParams) =>
            this.service.getAll$(params).pipe(
              map((response: OrderingResponse) => new OrderingLoadSuccessAction(response)),
              catchError((error) => of(new OrderingLoadFailAction(error)))
            )
          )
        )
  );
}
