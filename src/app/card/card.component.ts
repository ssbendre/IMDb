import { Component, OnInit } from '@angular/core';
import { MovieCardsService } from '../movie-cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public cards;

  constructor(private movieCardsService: MovieCardsService) {}

  ngOnInit() {
    this.cards = this.movieCardsService.cards;
  }
}
