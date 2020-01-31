import { Component, OnInit, Input } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ImdbService } from '../../services/imdb.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public cards: any = [];
  displayPosition: string;
  dataSource = this.cards;

  constructor(private movieCardsService: ImdbService) {    
  }

  ngOnInit() {  
    this.loadMovieDetails();  
  }      

  loadMovieDetails() {
    this.movieCardsService.cards().subscribe(
      movieData => {
        this.cards.push(movieData);      
    });
  }

  changeStyle() {
    this.displayPosition = 'block';
  }

  changeStyle1() {
    this.displayPosition = 'none';
  }
}
