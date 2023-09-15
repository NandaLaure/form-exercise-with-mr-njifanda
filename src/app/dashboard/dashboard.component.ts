import { Component, OnInit } from '@angular/core';
import {user } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  auth!: user;

  constructor (
    private authservice:AuthService,
    private router:Router
  ) {}
  ngOnInit(): void {
  
    const auth = this.authservice.auth();
    if (auth.error) {

      this.router.navigate(['login']);
    } else {

      this.auth = auth.data;
    }
  }
}
