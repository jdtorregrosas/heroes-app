import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';

import { heroReducer } from './reducers/hero.reducer';
 
import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroesList/heroesList.component';
import { HeroOverviewComponent } from './heroOverview/heroOverview.component';
import { HeroDetailComponent } from './heroDetail/heroDetail.component';

import { HeroesService } from './services/heroes.service';

const appRoutes: Routes = [
  { path: '', component: HeroesListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ heroReducer }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroOverviewComponent,
    HeroDetailComponent
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }