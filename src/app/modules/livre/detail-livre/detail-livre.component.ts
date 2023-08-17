import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { LivreService } from 'src/app/services/livre/livre.service';
import { Ilivre } from '../models/livre';


@Component({
  selector: 'app-detail-livre',
  templateUrl: './detail-livre.component.html',
  styleUrls: ['./detail-livre.component.css']
})
export class DetailLivreComponent implements OnInit {

  constructor(private route: ActivatedRoute, private serviceLivre:LivreService) { }
  livre$:Observable<Ilivre>=EMPTY;
  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('id');
    // backend pour recupéer le detail de livre
    this.livre$=this.serviceLivre.getLivreById(Number(id));
  }

}
