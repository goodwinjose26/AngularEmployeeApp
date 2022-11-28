import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { FormsModule } from '@angular/forms';

const myRoute:Routes=[
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"search",
    component:SearchemployeeComponent
  },
  {
    path:"view",
    component:ViewemployeeComponent
  },
  {
    path:"add",
    component:AddemployeeComponent
  },
  {
    path:"edit",
    component:EditComponent
  },
  {
    path:"delete",
    component:DeleteComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddemployeeComponent,
    SearchemployeeComponent,
    ViewemployeeComponent,
    NavbarComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
