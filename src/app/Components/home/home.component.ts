import { Component } from '@angular/core';
import { BusinessConcept } from 'src/app/Models/business-concept';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  concepts: BusinessConcept[];
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.concepts = [
      { title: "Holistic business View" },
      { title: "Blue Ocean Strategy" },
      { title: "Financial Management Principals", details: '"Cashflow, Cost optimization"' },
      { title: "Engineering Solution", details: '"Pareto, Root Cause Analysis, Demand planning"' }
    ]
    this.form = this.fb.group({
      name: ['', Validators.minLength(3)],
      email: ['', Validators.email],
      subject: ['', Validators.minLength(3)],
      details: ['', Validators.minLength(10)]
    })
  }
  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }
  get subject() {
    return this.form.get('subject');
  }
  get details() {
    return this.form.get('details');
  }

}
