import { Component, OnInit, Inject } from '@angular/core';
import { Hero } from './interfaces/hero.type';
import { HeroesService } from './services/heroes.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  heroes : Hero[]; 
  constructor(@Inject(HeroesService) private heroesService: HeroesService){} 
  ngOnInit(){
    this.heroesService.getHeroes().subscribe(data=>this.heroes=data);
  }
}