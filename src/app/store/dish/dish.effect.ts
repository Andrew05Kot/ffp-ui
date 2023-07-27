import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  DishActionType,
  DishLoadAction,
  DishLoadFailAction,
  DishLoadSuccessAction,
} from '@app/store/dish/dish.action';
import { DishesResponse, RequestParams } from '@app/models/backend';
import { DishService } from '@app/services/api/dish.service';

@Injectable()
export class DishEffect {

  constructor(
    private actions$: Actions,
    private service: DishService
  ) {
  }

  public loadDishes$ = createEffect(
    (): Observable<Action> =>
      this.actions$
        .pipe(ofType<DishLoadAction>(DishActionType.Loading),
          map(action => action.payload),
          switchMap((params: RequestParams) =>
            this.service.getAll$(params).pipe(
              map((response: DishesResponse) => {
                return new DishLoadSuccessAction(response)
              }),
              catchError((error) => of(new DishLoadFailAction(error)))
            )
          )
        )
  );
}
