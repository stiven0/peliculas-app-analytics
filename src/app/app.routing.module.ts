import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule, Router } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'movie/:id', component: MovieComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [ RouterModule.forRoot( ROUTES ) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}