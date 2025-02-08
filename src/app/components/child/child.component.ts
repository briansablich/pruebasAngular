import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  //decorador input sirve para recibir datos del componente padre
  //@Input()
  //mensaje: string = "";

  //input signal sirve para recibir datos del componente padre (forma usada)
  mensaje = input<string>('');

  //@Input()
  //gato: any;
  gato = input<any>();

  //dedcorador output sirve para enviar datos al componente padre
  @Output()
  login: EventEmitter<any> = new EventEmitter<any>;

  userName: string = 'Pantera';

  handleLogin(){
    this.login.emit(this.userName);
  }
}
