import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FormsModule],
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

  //funciones para probar cosas
  addOne(){
    this.numero++;
  }

}
