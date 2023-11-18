// login.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  onSubmit() {
   
    console.log('Login form submitted:', this.user);

    console.log('Login successful!');

    // Reset the form
    this.user = {
      email: '',
      password: ''
    };
  }
}
