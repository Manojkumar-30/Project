// registration.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/FormsModul';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private registrationService: RegistrationService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const user = {
        name: form.value.name,
        email: form.value.email,
        password: form.value.password
      };

      this.registrationService.registerUser(user)
        .subscribe(
          (response) => {
            console.log(response);
            // Handle success, e.g., show a success message to the user
          },
          (error) => {
            console.error(error);
            // Handle error, e.g., show an error message to the user
          }
        );
    }
  }
}
