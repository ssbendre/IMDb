import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {
  constructor(private http: HttpClient) { }

  public cards() {
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=30b00791';
    return this.http.get(url);
  }

}
