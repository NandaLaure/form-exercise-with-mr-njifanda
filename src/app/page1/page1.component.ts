import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  title = 'Page1';

  signupForm!: FormGroup
  saveError: string=''

  constructor(
    private formbuilder: FormBuilder,
    private authservice: AuthService,
    private router: Router
    ) { }

    // private confirmPassword(password: string, confirm_password: string) {
    //   return (formGroup: FormGroup) => {
  
    //     const old_password = formGroup.controls[password];
    //     const new_password = formGroup.controls[confirm_password];
    //     if (old_password.errors && !new_password.errors?.['confirmed_validator']) {
    //       return ;
    //     }
  
    //     if (old_password.value !== new_password.value) {
  
    //       new_password.setErrors({ confirmed_validator: true })
    //     } else {
  
    //       new_password.setErrors(null)
    //     }
    //   }
    // }

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
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,10}$/),
      ]),
  })
}
onSubmit(): void {

  const save = this.authservice.register(this.signupForm.value);
  if (!save.error) {

    localStorage.setItem('auth', JSON.stringify(save.data))
    
  } else {

    this.saveError = save.message
  }
}


}
