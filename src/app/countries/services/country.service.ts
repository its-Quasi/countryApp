import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountryService {

  private urlBase : string = 'https://restcountries.com/v3.1/'


  constructor(private http: HttpClient) {}

  searchCapital(capital : string) : Observable<Country[]> {
    const url = this.urlBase + capital
    return this.http.get<Country[]>(url)
  }
}
