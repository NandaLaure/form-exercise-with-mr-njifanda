import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';

const routes: Routes = [
  {path:'page1', component:Page1Component, title:'Login'},
  {path:'page2', component:Page2Component, title:'Signin'},
  {path:'', redirectTo:"/page1", pathMatch:'full'},
  {path: 'forgot', component:ForgotpassComponent, title:'Recover account'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
