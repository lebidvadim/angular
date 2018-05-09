import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class FilmsService {

  constructor(private http: Http) {}

  getFilms(name: string) {
    return this.http.get('http://www.omdbapi.com/?t=' + name + '&plot=full&apikey=1f36c75b');
  }

}
