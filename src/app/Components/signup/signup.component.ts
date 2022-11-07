import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required, Validators.minLength(3)],
      lastName: ['', Validators.required, Validators.minLength(3)],
      email: ['', Validators.required, Validators.email],
      mobile: ['', Validators.required],
      password: ['', Validators.required],

    })
  }
  get firstName() {
    return this.form.get('firstName')
  }
  get lastName() {
    return this.form.get('lastName')
  }
  get email() {
    return this.form.get('email')
  }
  get mobile() {
    return this.form.get('mobile')
  }
  get password() {
    return this.form.get('password')
  }

  ngOnInit(): void {
  }

}
