import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  loginForm: FormGroup = new FormGroup({});
  loginError: string = '';

  constructor (
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],

      password: ['', [
        Validators.required
      ]]
    })
  }

  private clearError (): void {
     setTimeout(() => {
      this.loginError = ''
     }, 2000);
  }

  onSubmit() {

    const form = this.loginForm.value;
    const login = this.authService.login(form.email, form.password)
    if (login.error) {

      this.loginError = login.message;
      this.clearError();
    } else {
console.log(login.data);

      this.router.navigate(['dashboard'], {

        queryParams: {id: login.data?.id}
      })
    }
  }
}



