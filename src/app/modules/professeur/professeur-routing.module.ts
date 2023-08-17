import { NgModule } from '@angular/core';
import { CreateProfesseurComponent } from './create-professeur/create-professeur.component';
import { RouterModule, CanActivate } from '@angular/router';
import { DetailProfesseurComponent } from './detail-professeur/detail-professeur.component';
import { ProfesseurGuard } from './Guard/professeur.guard';
import { ListProfesseurComponent } from './list-professeur/list-professeur.component';

const routes=[
  {
    path:'professeur/:id',component:DetailProfesseurComponent,CanActivate:[ProfesseurGuard]
  },
  {
    path:'professeurs',component:ListProfesseurComponent
  },
  {
    path:'CreateProfesseur',component:CreateProfesseurComponent
  }
]
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ProfesseurRoutingModule{};
