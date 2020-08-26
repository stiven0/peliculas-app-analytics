import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../shared/models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  public movie: Movie;
  public urlImage: string;

  constructor(
    private moviesService: MoviesService,
    private activatedRouter: ActivatedRoute
  ) { 
    this.urlImage = 'https://image.tmdb.org/t/p/w500';
  }

  ngOnInit(): void {

    this.activatedRouter.params.subscribe( (params: Params) => {

      this.moviesService.getMovie( params.id ).subscribe(
        (response: Movie) => {
          this.movie = response;
          console.log(this.movie);
        },
        error => {
          console.log(error);
      });

    });

  }

}
