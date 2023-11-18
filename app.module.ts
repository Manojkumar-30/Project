// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from 'src/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// application.model.ts
export interface Application {
  id: number;
  name: string;
  mobileNumber: string;
  email: string;
  gender: string;
  applicationAmount: number;
  profilePicture: string; // URL to the image
  markSheet: string; // URL to the document
}

