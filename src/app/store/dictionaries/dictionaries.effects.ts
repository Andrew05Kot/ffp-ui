import { Injectable } from '@angular/core';

import * as fromActions from './dictionaries.actions'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EstablishmentService } from '@app/services/api/establishment.service';
import { DishService } from '@app/services/api/dish.service';
import { catchError, of, switchMap, take, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dictionaries, Dictionary } from './dictionaries.models';
import { ControlItem, Item } from '@app/models/frontend';
import * as jsonCountries from '@src/assets/countries.json'

type Action = fromActions.All;

const itemToControlItem = (x: Item): ControlItem => ({
  value: x.id,
  label: x.name,
  icon: x.icon
})

const addDictionary = (items: Item[]): Dictionary => ({
  items,
  controlItems: [...items].map(x => itemToControlItem(x))
})

@Injectable()
export class DictionariesEffects {
  constructor(private actions: Actions,
              private establishmentService: EstablishmentService,
              private dishService: DishService) {
  }

  read$ = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.READ),
      switchMap(() => {
        return zip(
          this.dishService.getAll$(),
          this.establishmentService.getAll$(),
          of((jsonCountries as any).default.map(country => ({
              id: country.code.toUpperCase(),
              name: country.name,
              icon: {
                src: null,
                cssClass: 'fflag fflaf-' + country.code.toUpperCase()
              }
            })
          ))
        ).pipe(
          map(([dishes, establishments, countries]) => {
            const dictionaries: Dictionaries = {
              dishes: addDictionary(dishes),
              establishments: addDictionary(establishments?.items),
              countries: addDictionary(countries)
            };
            return new fromActions.ReadSuccess(dictionaries);
          }),
          catchError(err => of(new fromActions.ReadError(err?.message)))
        )
      })
    )
  );
}
