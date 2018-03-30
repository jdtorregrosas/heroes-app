import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { heroReducer } from './reducers/hero.reducer';
 
import { AppComponent } from './app.component';
import { heroOverviewComponent } from './heroOverview/heroOverview.component';

import { HeroesService } from './services/heroes.service';
 
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ heroReducer: heroReducer })
  ],
  declarations: [
    AppComponent,
    heroOverviewComponent
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }