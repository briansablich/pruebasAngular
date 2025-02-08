import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from "./components/child/child.component";
import Product from './models/Product';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FormsModule, ChildComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //Variables para probar cosas
  title = 'my-project';
  nombre: string = 'Flauta';
  condicion: boolean = false;
  numero: number = 0;
  numerosArray: string[] = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];
  text: string = 'Soy la pantera flauta';
  userNamePadre: string = 'Flautita';
  product: Product;
  isAplicable: boolean;
  
  gato: any = {
    "id": 1,
    "name": "Tobias",
    "age": 3
  }
  
  animals: any = [
    {
      "id": 1,
      "name": "Perro",
      "type": "Mamífero",
      "image" : "https://img.freepik.com/vector-gratis/perro-lindo-alegre-sobre-fondo-blanco_1308-132745.jpg?semt=ais_hybrid"
    },
    {
      "id": 2,
      "name": "Gato",
      "type": "Mamífero",
      "image" : "https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic_1468962.jpg?w=1600&h=1179"
    },
    {
      "id": 3,
      "name": "Loro",
      "type": "Ave",
      "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Scarlet_Macaw_and_Blue-and-gold_Macaw.jpg/320px-Scarlet_Macaw_and_Blue-and-gold_Macaw.jpg"
    }
  ]
  
  
  //---------------funciones para probar cosas-----------------------------
  //añadir un numero
  addOne(){
    this.numero++;
  }

  aplicable(){
    this.isAplicable = !this.isAplicable
  }
  
  //recibir el Output() de child.
  //recive el evento 'e' que trae un 'any'
  recivedUserName(e: any){
    this.userNamePadre = e;
  }
  
  //se ejecuta cuando el componente se cree
  constructor(){
    this.userNamePadre = 'Esteban';
    this.isAplicable = false;
    this.product = {
      name: "Computer",
      price: 500,
      isForSale: true
    }
  }
  


}
