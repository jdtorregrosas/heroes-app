import { Component, OnInit, Inject } from '@angular/core';
import { Hero } from '../interfaces/hero.type';
import { HeroesService } from '../services/heroes.service';
import { HttpClient } from '@angular/common/http';
import { Store, select, State } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SAVE_HEROES, AppState } from '../reducers/hero.reducer';



@Component({
  selector: 'heroes-list',
  templateUrl: './heroesList.component.html',
  styleUrls: ['./heroesList.component.scss']
})
export class HeroesListComponent implements OnInit{
  heroes : Observable<Hero[]>; 
  constructor(@Inject(HeroesService) private heroesService: HeroesService, @Inject(Store) private store: Store<AppState>, @Inject(State) private state: State<AppState>){
    this.getHeroesFromServer();
  } 
  ngOnInit(){}

  getHeroesFromServer(){
    this.heroesService.getHeroes().subscribe(
      data => {
        this.store.dispatch(
            {type: SAVE_HEROES, payload: data.map((hero, index) => ({...hero, _id: index+1}))}
        );
        this.heroes = this.store.pipe(select('heroReducer'));
      }
    );
  }
}