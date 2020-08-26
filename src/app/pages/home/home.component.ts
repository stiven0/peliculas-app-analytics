import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public movies: Movie[];
  public moviesRef: Movie[];
  public urlImage: string;

  constructor(
    private moviesService: MoviesService
  ) {
    this.urlImage = 'https://image.tmdb.org/t/p/w500';
  }

  ngOnInit(): void {
    this.getMovies();

    this.moviesService.busqueda.subscribe( (nameMovie: string) => {
      this.movies = this.moviesRef.filter( movie => movie.title.toLowerCase().includes( nameMovie.toLowerCase() )  );

      if ( this.movies.length === 0 ) {
            this.getMovies();
      }

    });
  }


  getMovies(): void {
    this.moviesService.getMovies().subscribe(
      (moviesResponse: Movie[]) => {
        this.movies = moviesResponse;
        this.moviesRef = moviesResponse;
      },
      error => {
        console.log(error);
      });
}

}
