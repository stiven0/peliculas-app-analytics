import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { filter, distinctUntilChanged, debounceTime } from 'rxjs/operators';

import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  busqueda: FormControl;

  constructor(
    private moviesService: MoviesService
  ) {
    this.busqueda = new FormControl();
  }

  ngOnInit(): void {

    this.busqueda.valueChanges
    .pipe(
      debounceTime( 700 ),
      distinctUntilChanged(),
      filter( value => value.length > 2 )
    )
    .subscribe( value => this.moviesService.busqueda.emit( value ) );


  }

}
