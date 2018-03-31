import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule }   from '@angular/forms';

import { heroReducer } from './reducers/hero.reducer';

import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroesList/heroesList.component';
import { HeroOverviewComponent } from './heroOverview/heroOverview.component';
import { HeroDetailComponent } from './heroDetail/heroDetail.component';
import { HeroFormComponent } from './heroForm/heroForm.component';
import { HeroEffects } from './effects/hero.effects';

import { HeroesService } from './services/heroes.service';

const appRoutes: Routes = [
  { path: '', component: HeroesListComponent},
  { path: 'hero/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ heroReducer }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    EffectsModule.forRoot([HeroEffects])
  ],
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroOverviewComponent,
    HeroDetailComponent,
    HeroFormComponent
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }