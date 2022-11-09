import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.minLength(3)],
      lastName: ['', Validators.minLength(3)],
      email: ['', Validators.email],
      mobile: [''],
      password: [''],
    })
  }
  get firstName() {
    return this.signupForm.get('firstName')
  }
  get lastName() {
    return this.signupForm.get('lastName')
  }
  get email() {
    return this.signupForm.get('email')
  }
  get mobile() {
    return this.signupForm.get('mobile')
  }
  get password() {
    return this.signupForm.get('password')
  }
}
