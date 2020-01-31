import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IMDB';
  public serchValue = '';

  searchText(value: string) {
    this.serchValue = value;
    debugger
  }
}
