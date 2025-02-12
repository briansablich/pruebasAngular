import { Component } from '@angular/core';
import { CreatecatService } from '../../services/createcat.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-cats',
  imports: [RouterLink],
  templateUrl: './list-cats.component.html',
  styleUrl: './list-cats.component.css'
})
export class ListCatsComponent {
  constructor(public createcatService: CreatecatService){}

}
