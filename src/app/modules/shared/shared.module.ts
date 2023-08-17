import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtoileComponent } from './etoile/etoile.component';
import { DeleteSpacePipe } from './pipes/delete-space.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    EtoileComponent,
    DeleteSpacePipe
  ],

  imports: [
    CommonModule,
    NgbModule,
  ],
  exports: [EtoileComponent,DeleteSpacePipe,CommonModule]
})
export class SharedModule { }
