import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AgmCoreModule } from '@agm/core';
import { NgsRevealModule } from 'ngx-scrollreveal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgsRevealModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC3PS0DwWZZetsoMDIhXJR3GjM09MwMjxw',
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
