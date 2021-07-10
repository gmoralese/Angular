import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {
  constructor(private http: HttpClient) { }
  public heroesUrl = 'http://157.245.138.232:9091/api/v1/test/superheroes';

  public getHeroes(): Observable<Data> {
    return this.http.get<Data>(this.heroesUrl);
  }

  public getHero(id: number) {
    return this.http.get(`${this.heroesUrl}/${id}`);
  }
}
