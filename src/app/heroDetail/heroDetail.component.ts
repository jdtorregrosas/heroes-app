import {Component, OnInit, Inject} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../interfaces/hero.type';
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
    constructor(
        @Inject(ActivatedRoute) private route: ActivatedRoute,
        @Inject(Router) private router: Router
    ){}
    ngOnInit(){
        this.id = +(this.route.snapshot.paramMap.get('id'));

        this.hero = this.getHero(this.id);

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
        return {
            _id: id,
            _name:'Tony Stark',
            _nickname: 'Iron Man',
            _height: 1.3,
            _picture: 'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg'
        };
    }
}