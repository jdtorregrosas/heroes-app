import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
 
import { AppComponent } from './app.component';
import { heroOverviewComponent } from './heroOverview/heroOverview.component';
 
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    heroOverviewComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }