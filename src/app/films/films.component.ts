import {Component} from '@angular/core';
import {FilmsService} from '../films.service';
import {NgForm} from '@angular/forms';
import {Response} from '@angular/http';

@Component({
  selector: '.app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})

export class FilmsComponent {
  filmSearch = {};
  films = [];
  flagFilm = '';
  flagFil = false;

  constructor(private filmsService: FilmsService) { }

  searchFilms(form: NgForm) {
    this.filmsService
      .getFilms(form.value.nameFilm)
      .subscribe((responce: Response) => {
        const data = responce.json();
        if (data.Response !== 'False') {
          this.filmSearch = data;
          this.flagFilm = 'yes';
        }
        else{
          this.flagFilm = 'no';
        }
      });
  }

  addFilm() {
    this.films.push(this.filmSearch);
    if(this.films.length > 0)
      this.flagFil = true;
    //console.log(this.films);
  }
  delFilms(id: number) {
    this.films.splice(id, 1);
  }
}
