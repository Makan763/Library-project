import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Iprofesseur } from 'src/app/modules/professeur/models/professeur';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {
  [x: string]: any;

  constructor(private http:HttpClient) { }
  getAllProfesseur():Observable<Iprofesseur[]>{

    return this.http.get<Iprofesseur[]>('api/professeurs').pipe(

      map(p=>p),
    );
  }
  getProfesseurById(id:number):Observable<Iprofesseur>

  {
    return this.getAllProfesseur().pipe(

      map(

        professeurs=>{

          return professeurs.find(p=>p.id==id) as Iprofesseur

        }

      )
    )
  }
  AjouterProfesseur(professeur:Iprofesseur)

  {
    return this.http.post('api/professeurs', professeur);
  }
}
