import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LivreRoutingModule } from './modules/livre/livre-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfesseurRoutingModule } from './modules/professeur/professeur-routing.module';


const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent
  },

  {
    path:'**',component:NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    LivreRoutingModule,
    ProfesseurRoutingModule,
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
