import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './film/film.component';
import {HttpModule} from '@angular/http';
import {FilmsService} from './films.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FilmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
