import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { CreateLivreComponent } from './create-livre/create-livre.component';
import { DetailLivreComponent } from './detail-livre/detail-livre.component';
import { ListLivresComponent } from './list-livres/list-livres.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ListLivresComponent,
    DetailLivreComponent,
    CreateLivreComponent
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
export class LivreModule { }
