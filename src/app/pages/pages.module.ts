import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { MovieComponent } from './movie/movie.component';

@NgModule({

    declarations: [
        HomeComponent,
        MovieComponent
    ],
    imports: [
        CommonModule,
        AngularMaterialModule,
        SharedModule,
        RouterModule
    ]

})

export class PagesModule {}
