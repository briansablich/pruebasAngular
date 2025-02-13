import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(public userService: UserserviceService){
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe({
      next: (data) =>{
        this.userService.users = data;
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

}
