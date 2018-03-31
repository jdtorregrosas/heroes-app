import { Action } from '@ngrx/store';
import { Hero } from '../interfaces/hero.type';

export const RETRIEVE_HEROES = 'RETRIEVE_HEROES';
export const RETRIEVE_HERO = 'RETRIEVE_HERO';
export const RETRIEVE_HEROES_SUCCESS = 'RETRIEVE_HEROES_SUCCESS';
export const RETRIEVE_HEROES_FAILED = 'RETRIEVE_HEROES_FAILED';

export interface CustomAction extends Action {
    type: string;
    payload?: any;
}

export interface State {
  heroes: Hero[],
  retrievingState: number,
  currentHero: Hero
}

export const initialState: State = {
  heroes: [],
  retrievingState: 0,
  currentHero: null
}

export function heroReducer(state :State = initialState, action: CustomAction) {
  switch (action.type) {
    case RETRIEVE_HEROES_SUCCESS:
      return Object.assign({}, state, {
        heroes: action.payload,
        retrievingState: 0
      });
    case RETRIEVE_HEROES_FAILED:
      return Object.assign({}, state, {
        retrievingState: 2
      });
    case RETRIEVE_HEROES:
      return Object.assign({}, state, {
        retrievingState: 1
      });

    case RETRIEVE_HERO:
      return Object.assign({}, state, {
        currentHero : state.heroes.find(hero => hero._id === action.payload)
      });

    default:
      return state;
  }
}