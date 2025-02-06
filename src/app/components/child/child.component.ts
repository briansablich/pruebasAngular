import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  //@Input()
  //mensaje: string = "";

  mensaje = input<string>('');

  //@Input()
  //gato: any;
  gato = input<any>();

}
