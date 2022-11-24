import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddemployeeComponent,
    SearchemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
