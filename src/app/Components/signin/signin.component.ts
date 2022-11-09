import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signinForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.signinForm = this.fb.group({
      email: ['', Validators.email],
      password: [''],
    })
  }
  get email() {
    return this.signinForm.get('email')
  }
  get password() {
    return this.signinForm.get('password')
  }
}
