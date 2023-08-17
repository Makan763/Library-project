import { NgModule } from "@angular/core";
import { CreateLivreComponent } from "./create-livre/create-livre.component";
import { DetailLivreComponent } from "./detail-livre/detail-livre.component";
import { DetailLivreGuard } from "./Guard/detail-livre.guard";
import { ListLivresComponent } from "./list-livres/list-livres.component";
import { RouterModule } from '@angular/router';

const routes=[
    {
        path:'livre/:id',component:DetailLivreComponent,canActivate:[DetailLivreGuard]
      },
      {
        path:'livres',component:ListLivresComponent
      },
      {
        path:'CreateLivre',component:CreateLivreComponent
      },
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LivreRoutingModule{};


