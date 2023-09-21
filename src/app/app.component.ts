import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
    private authservice: AuthService,
    private router: Router
  ){}
  ngOnInit(): void {
   const check: any = this.authservice.auth
   if (check.error!) {
    this.router.navigate(['page2'],{

    })
   }
   else{
    this.router.navigate(['dashboard'])
   }
  }
  title = 'router';

  
}
