import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { CreatecatService } from '../../services/createcat.service';

@Component({
  selector: 'app-create',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  catForm: FormGroup;
    name: FormControl;
    age: FormControl;
    color: FormControl;
    
    constructor(public createcatService: CreatecatService){
      this.name = new FormControl('', Validators.required);
      this.age = new FormControl('', [Validators.required, Validators.min(0), Validators.max(25)]);
      this.color = new FormControl('', Validators.required);
      this.catForm = new FormGroup ({
        name: this.name,
        age: this.age,
        color: this.color
      })
    }

    handleSubmit(): void {
      console.log(this.catForm.value);
      this.createcatService.addCat(this.catForm.value);
      this.catForm.reset();
    }


}
