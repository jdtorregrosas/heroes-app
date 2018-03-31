
import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { RETRIEVE_HEROES, RETRIEVE_HEROES_SUCCESS, RETRIEVE_HEROES_FAILED, CustomAction } from '../reducers/hero.reducer';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { HeroesService } from "../services/heroes.service";


@Injectable()
export class HeroEffects {

    constructor(@Inject(Actions) private actions$: Actions, 
                @Inject(HeroesService) private heroesService: HeroesService
            ) {}


    @Effect()
    getHeroes$: Observable<CustomAction> = this.actions$.pipe(
        ofType(RETRIEVE_HEROES),
        mergeMap(action =>
            this.heroesService.getHeroes().pipe(
                // If successful, dispatch success action with result
                map(data => ({type: RETRIEVE_HEROES_SUCCESS, payload: data.map((hero, index) => ({...hero, _id: index+1}))})),
                // If request fails, dispatch failed action
                catchError(() => of({ type: RETRIEVE_HEROES_FAILED }))
            )
        )
    );
}