import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Iprofesseur} from'../models/professeur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-professeur',
  templateUrl: './create-professeur.component.html',
  styleUrls: ['./create-professeur.component.css']
})
export class CreateProfesseurComponent implements OnInit {
  form:FormGroup;
  submitted:boolean=false;

  constructor(private formBuilder:FormBuilder, private route:Router) {
    this.form=this.formBuilder.group(
      {
        id:['', Validators.required],
        nom:['', Validators.required],
        prenom:['', Validators.required],
      }
    )
  }
  get f(){
    return this.form.controls;
  }
  onSubmit(professeur:any){
    this.submitted=true;
    if(this.form.invalid) return;
     let professeurTemp:Iprofesseur={
      id:Number(9),
      Nom:professeur.Nom,
      Prenom:professeur.Prenom,

     }
  }


  ngOnInit(): void {
  }

}
