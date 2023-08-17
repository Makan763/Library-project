import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { ProfesseurService } from 'src/app/services/professeur/professeur.service';
import { Iprofesseur } from '../models/professeur';

@Component({
  selector: 'app-list-professeur',
  templateUrl: './list-professeur.component.html',
  styleUrls: ['./list-professeur.component.css']
})

export class ListProfesseurComponent implements OnInit {
  titre:string="Bienvenue professeur";
  affichage:boolean=true;
  professeurs$:Observable<Iprofesseur[]>=EMPTY;
  constructor(private serviceProfesseur:ProfesseurService) { }

  ngOnInit(): void {

    this.getAllProfesseurs();
    console.log(this.professeurs$)

  }
  onClick()
  {
    this.affichage=!this.affichage
  }
  private getAllProfesseurs(){

    return this.professeurs$=this.serviceProfesseur.getAllProfesseur()

  }

}
