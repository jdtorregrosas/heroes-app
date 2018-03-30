import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/hero.type';

@Injectable()
export class HeroesService {
    constructor(@Inject(HttpClient) private http: HttpClient){} 
    getHeroes(){
        return this.http.get<Hero[]>('https://udem.herokuapp.com/heroes');
    }
}