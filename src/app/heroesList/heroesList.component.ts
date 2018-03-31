import { Component, OnInit, Inject } from '@angular/core';
import { Store, select} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { RETRIEVE_HEROES, State } from '../reducers/hero.reducer';

@Component({
  selector: 'heroes-list',
  templateUrl: './heroesList.component.html',
  styleUrls: ['./heroesList.component.scss']
})
export class HeroesListComponent implements OnInit{
  state$: Observable<State>;
  constructor(
      @Inject(Store) private store: Store<State>
    ){}   
     
  ngOnInit(){
    this.getHeroes(state => {
      if(!state.heroes || state.heroes.length === 0){
        this.getHeroesFromServer();
      }
    });    
  }

  getHeroes(callback){
    this.state$ = this.store.pipe(select('heroReducer'));
    this.state$.first().subscribe(function(state){
      callback(state);
    })
  }

  getHeroesFromServer(){
    this.store.dispatch({type: RETRIEVE_HEROES});
    this.state$ = this.store.pipe(select('heroReducer'));
  }
}