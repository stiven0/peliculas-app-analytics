import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Movie } from '../shared/models/movie';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})

export class MoviesService {

    private ulrMovies: string;
    private urlMovieID: string;
    public busqueda: EventEmitter<string> = new EventEmitter();

    constructor( private http: HttpClient ){
        this.ulrMovies = `https://api.themoviedb.org/3/list/1?api_key=${environment.api_key}&language=es-ES`;
        this.urlMovieID = 'https://api.themoviedb.org/3/movie/';
    }

    getMovies(): Observable<Movie[]> {
        const headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get( this.ulrMovies ).pipe( pluck('items') );
    }

    getMovie( id: string ): Observable<Movie> {
        const headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get<Movie>( `${ this.urlMovieID }${ id }?api_key=${ environment.api_key }&language=es-ES` );
    }


}
