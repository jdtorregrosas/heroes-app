import { Component, OnInit, Inject} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store, select} from '@ngrx/store';
import { Hero } from '../interfaces/hero.type';
import { State, RETRIEVE_HERO } from '../reducers/hero.reducer';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: './heroDetail.component.html',
    styleUrls: ['./heroDetail.component.scss']
})
export class HeroDetailComponent implements OnInit{
    id: number;
    cardinal: string;
    hero : Hero;
    state$ : Observable<State>;
    constructor(
        @Inject(ActivatedRoute) private route: ActivatedRoute,
        @Inject(Router) private router: Router,
        @Inject(Store) private store: Store<State>
    ){
        this.id = +(this.route.snapshot.paramMap.get('id'));
        this.getHero(this.id);
    }
    ngOnInit(){
        switch(this.id){
            case 1: 
                this.cardinal = 'st';
                break;
            case 2:
                this.cardinal = 'nd';
                break;
            case 3:
                this.cardinal = 'rd';
                break;    
            default:
                this.cardinal = 'th'
        }
    }
    getHero(id){
        this.store.dispatch({type: RETRIEVE_HERO, payload: id});
        this.state$ = this.store.pipe(select('heroReducer'));
    }

    goToHome(id){
        this.router.navigate(['/']);
    }
}