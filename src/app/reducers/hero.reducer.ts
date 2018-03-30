import { Action } from '@ngrx/store';
import { Hero } from '../interfaces/hero.type';

export const SAVE_HEROES = 'SAVE_HEROES';

export interface CustomAction extends Action {
    type: string;
    payload?: any;
}

export interface AppState {
    heroes: Hero[];
}

export function heroReducer(state: AppState = {heroes: []}, action: CustomAction) {
  switch (action.type) {
    case SAVE_HEROES:
      return state.heroes = action.payload;

    default:
      return state;
  }
}