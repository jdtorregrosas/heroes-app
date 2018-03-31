import { Component, OnInit, Input, Inject } from '@angular/core';
import { Hero } from '../interfaces/hero.type';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State, SAVE_HERO } from '../reducers/hero.reducer';

@Component({
    selector: 'hero-form',
    templateUrl: './heroForm.component.html',
    styleUrls: ['./heroForm.component.scss']
})
export class HeroFormComponent implements OnInit{
    @Input() data: State
    model : Hero;
    saved : boolean;
    constructor(
        @Inject(Router) private router : Router,
        @Inject(Store) private store: Store<State>
    ){
    }
    ngOnInit(){
        if(this.data.currentHero){
            this.model = Object.assign({}, this.data.currentHero);
        } else {
            this.router.navigate(['/']);
        }
    }
    saveHero(){
        this.store.dispatch({type: SAVE_HERO, payload: this.model});
        alert('Saved succesfully');
        this.router.navigate(['/']);
    }
}