import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/Models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cards: Card[];
  constructor() {
    this.cards = [
      {
        image: "assets/home/Vector Smart Object-2.png",
        title: "Simplistic",
        description: "Intuitive user interface that is customized to present the most important insights."
      },
      {
        image: "assets/home/Vector Smart Object.png",
        title: "Informative",
        description: "Interactive dashboard with ability to drill down. It can be customized by the owner to fulfil his needs."
      },
      {
        image: "assets/home/Vector Smart Object-1.png",
        title: "Leading",
        description: "Provide recommendations to direct the business based on multiple factors and holistic approach."
      }
    ];
  }

  ngOnInit(): void {
  }

}
