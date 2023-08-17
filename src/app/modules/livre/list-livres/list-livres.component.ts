import { Component, OnInit } from '@angular/core';
import { Ilivre } from '../models/livre';
import { LivreService } from '../../../services/livre/livre.service';
import { CategorieService } from '../../../services/livre/categorie.service';
import { Observable, EMPTY } from 'rxjs';

@Component({
  selector: 'app-list-livres',
  templateUrl: './list-livres.component.html',
  styleUrls: ['./list-livres.component.css']
})
export class ListLivresComponent implements OnInit {

  titre:string="La liste des livres";
  widthImg=60;
  heightImg=80;
  affichage:boolean=true;
  livres$:Observable<Ilivre[]>=EMPTY;
  listCategorie:string[]=[];
  categorieId:string='all';

  constructor(private serviceLivre:LivreService, private serviceCategorie: CategorieService) {

   }

  ngOnInit(): void {
    this.getAllLivres();
    this.listCategorie=this.serviceCategorie.getAllCategories();
  }

  onClick()
  {
    this.affichage=!this.affichage
  }

  ChangeCategory()
  {
    console.log(this.categorieId);
    if(this.categorieId=='all'){
      this.getAllLivres()
    }
    else
    {
      this.livres$=this.serviceLivre.getLivresByCategories(this.categorieId)

    }

  }
onNotify(event:number)
{
  alert(event);
}
private getAllLivres(){

  return this.livres$=this.serviceLivre.getAllLivre()

}

}
