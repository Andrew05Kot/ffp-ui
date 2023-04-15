import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EstablishmentService } from '@app/services/api/establishment.service';
import { Action } from '@ngrx/store';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  EstablishmentActionType,
  EstablishmentLoadAction,
  EstablishmentLoadFailAction,
  EstablishmentLoadSuccessAction,
} from '@app/store/establishment/establishment.action';
import { RequestParams, EstablishmentResponse } from '@app/models/backend';

@Injectable()
export class EstablishmentEffect {

  constructor(
    private actions$: Actions,
    private service: EstablishmentService
  ) {
  }

  public loadEstablishments$ = createEffect(
    (): Observable<Action> =>
      this.actions$
        .pipe(ofType<EstablishmentLoadAction>(EstablishmentActionType.Loading),
          map(action => action.payload),
          switchMap((params: RequestParams) =>
            this.service.getAll$(params).pipe(
              map((response: EstablishmentResponse) => new EstablishmentLoadSuccessAction(response)),
              catchError((error) => of(new EstablishmentLoadFailAction(error)))
            )
          )
        )
  );
}
