import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ilivre } from 'src/app/modules/livre/models/livre';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  constructor(private http:HttpClient) { }

  getAllLivre():Observable<Ilivre[]>{

    return this.http.get<Ilivre[]>('api/livres').pipe(

      map(l=>l),

    );
  }
  getLivresByCategories(categorie:string):Observable<Ilivre[]>{

    return this.getAllLivre().pipe(

      map(x=>x.filter(p=>p.Category==categorie))

    )
  }
  getLivreById(id:number):Observable<Ilivre>

  {
    return this.getAllLivre().pipe(

      map(

        livres=>{

          return livres.find(p=>p.id==id) as Ilivre

        }
      )
    )
  }
  AjouterLivre(livre:Ilivre)

  {
    return this.http.post('api/livres', livre);
  }

}
