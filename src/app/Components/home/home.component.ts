import { Component, OnInit } from '@angular/core';
import { BusinessConcept } from 'src/app/Models/business-concept';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  concepts: BusinessConcept[];
  constructor() {
    this.concepts = [
      { title: "Holistic business View" },
      { title: "Blue Ocean Strategy" },
      { title: "Financial Management Principals", details: '"Cashflow, Cost optimization"' },
      { title: "Engineering Solution", details: '"Pareto, Root Cause Analysis, Demand planning"' }
    ]
  }

  ngOnInit(): void {
  }

}
