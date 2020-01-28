import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {
  private url = 'http://www.omdbapi.com/?i=tt3896198&apikey=30b00791';

  constructor(private http: HttpClient) { }

  cards() {
    return this.http.get(this.url);
  }

}
