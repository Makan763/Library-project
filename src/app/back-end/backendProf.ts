import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Iprofesseur } from '../modules/professeur/models/professeur';

export class InMemHeroService implements InMemoryDbService {
  createDb() {
    let professeurs:Iprofesseur[]=[
      {
        id:1, Nom:"DIOMBANA", Prenom:"Makan"
      },
      {
        id:2, Nom:"TOURE", Prenom:"Assan"
      },
      {
        id:3, Nom:"DIAWARA", Prenom:"Sekou"
      },
      {
        id:5, Nom:"SANGARE", Prenom:"Ibrahim"
      },
      {
        id:6, Nom:"SIDIBE", Prenom:"Hamady"
      },
    ];
    return {professeurs};
  }
}
