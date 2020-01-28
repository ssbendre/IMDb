import { Component, OnInit } from '@angular/core';
import { ImdbService } from '../../services/imdb.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public cards: any = [];

  constructor(private movieCardsService: ImdbService) {}

  ngOnInit() {
    this.cards.push(this.movieCardsService.cards());
    console.log(this.cards);
  }
}
