import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  title = 'Page1';

  signupForm!: FormGroup
  constructor(private formbuilder: FormBuilder) { }
  ngOnInit(): void {

    this.signupForm = this.formbuilder.group({

      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(8),
        Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")
      ])
  })
}
onsubmit(){
  console.log(this.signupForm.value);

}



}
