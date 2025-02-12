import { Component } from '@angular/core';
import { CreatecatService } from '../../services/createcat.service';

@Component({
  selector: 'app-list-cats',
  imports: [],
  templateUrl: './list-cats.component.html',
  styleUrl: './list-cats.component.css'
})
export class ListCatsComponent {
  constructor(public createcatService: CreatecatService){}

}
