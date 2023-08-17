import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategorieService } from '../../../services/livre/categorie.service';
import { Ilivre } from '../models/livre';
import { LivreService } from '../../../services/livre/livre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-livre',
  templateUrl: './create-livre.component.html',
  styleUrls: ['./create-livre.component.css']
})
export class CreateLivreComponent implements OnInit {

  form:FormGroup;
  submitted:boolean=false;
  listCategorie:string[]=[];

  constructor(
    private formBuilder:FormBuilder,
    private serviceCategorie: CategorieService,
    private serviceLivre: LivreService,
    private route:Router
    ) {
    this.form=this.formBuilder.group(
      {
      name: ['', Validators.required],
      shortDescription:['', Validators.required],
      price:['', Validators.required],
      nbrStar:['', Validators.required],
      categorie:[''],
      urlImage:['', Validators.required],
      }
    )
   }
    get f(){
     return this.form.controls;
    }
   onSubmit(livre:any){
     this.submitted=true;
     if(this.form.invalid) return;
     let livreTemp:Ilivre={
      id:Number(9),
      Category:livre.categorie,
      Etoile:Number(livre.nbrStar),
      Name:livre.name,
      Price:Number(livre.price),
      ShortDescription:livre.shortDescription,
      ImageUrl:livre.urlImage,
      InStock:true,
      LongDescription:''
     }
     this.serviceLivre.AjouterLivre(livreTemp)
                .subscribe(
                  livre=>{
                    this.route.navigate(['/livres']);
                  },
                  error=>{
                    console.log(error);
                  }
                )
   }

  ngOnInit(): void {
    this.listCategorie=this.serviceCategorie.getAllCategories();
  }

}
