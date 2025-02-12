import { Injectable } from '@angular/core';
import Cat from '../models/cat/Cat';

@Injectable({
  providedIn: 'root'
})
export class CreatecatService {
  listCat: Cat[];

  constructor() {
    this.listCat = [
      {
        name: "Flauta",
        age: 5,
        color: "Negro rayado"
      },
      {
        name: "Calabaza",
        age: 1,
        color: "Naranja y blanco"
      },
      {
        name: "Fermin",
        age: 4,
        color: "Marrón gastadito"
      }
    ]
  }

  addCat(cat: Cat): void{
    this.listCat.push(cat);
  }
}
