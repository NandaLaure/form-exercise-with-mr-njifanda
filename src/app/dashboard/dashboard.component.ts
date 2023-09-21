import { Component, OnInit } from '@angular/core';
import {user } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  auth!: user;

  constructor (
    private authservice:AuthService,
    private router:Router,
    private localstorage: LocalStorageService
  ) {}
  ngOnInit(): void {
  
    const auth = this.authservice.auth();
    if (auth.error) {

      this.router.navigate(['page2']);
    } else {

      this.auth = auth.data;
    }
  }
  onexit(){
    const deletelocal : any = localStorage.removeItem('auth');

     this.router.navigate(['page2']);
    
  }
}
