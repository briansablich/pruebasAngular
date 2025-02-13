import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreatecatService } from '../../services/createcat.service';
import Cat from '../../models/cat/Cat';

@Component({
  selector: 'app-cat-details',
  imports: [],
  templateUrl: './cat-details.component.html',
  styleUrl: './cat-details.component.css'
})
export class CatDetailsComponent implements OnInit{
  selectedCat?: Cat | undefined;
  constructor(private route: ActivatedRoute, private catService: CreatecatService){
    
  }

  ngOnInit(): void {
    const catName = this.route.snapshot.params['catName'];
    this.selectedCat = this.catService.getCat(catName);
  }

}
