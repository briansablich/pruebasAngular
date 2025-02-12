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
        name: "flauta",
        age: 5,
        color: "negro rayado"
      },
      {
        name: "calabaza",
        age: 1,
        color: "naranja y blanco"
      },
      {
        name: "fermin",
        age: 4,
        color: "marron gastadito"
      }
    ]
  }

  addCat(cat: Cat): void{
    this.listCat.push(cat);
  }

  getCat(catName: string): Cat | undefined{
    return this.listCat.find((cat) => cat.name === catName);
  }

}
