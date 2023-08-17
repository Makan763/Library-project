import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbAlertModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { DetailProfesseurComponent } from './detail-professeur/detail-professeur.component';
import { ListProfesseurComponent } from './list-professeur/list-professeur.component';
import { CreateProfesseurComponent } from './create-professeur/create-professeur.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CreateProfesseurComponent,
    DetailProfesseurComponent,
    ListProfesseurComponent,

  ],
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbAlertModule,


  ]
})
export class ProfesseurModule { }
