import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { ProfesseurService } from 'src/app/services/professeur/professeur.service';
import { Iprofesseur } from '../models/professeur';
@Component({
  selector: 'app-detail-professeur',
  templateUrl: './detail-professeur.component.html',
  styleUrls: ['./detail-professeur.component.css']
})
export class DetailProfesseurComponent implements OnInit {

  constructor(private route: ActivatedRoute, private serviceProfesseur:ProfesseurService) { }

  professeurs$:Observable<Iprofesseur>=EMPTY;

  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('id');
    // backend pour recupéer le detail de livre
    this.professeurs$=this.serviceProfesseur.getProfesseurById(Number(id));
  }


}
