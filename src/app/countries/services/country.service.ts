import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountryService {

  private urlBase : string = 'https://restcountries.com/v3.1/'


  constructor(private http: HttpClient) {}

  searchCountryByCode(code : string) : Observable<Country | null> {
    const url = this.urlBase + 'alpha/' + code
    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0? countries[0] : null),
        catchError( () => of(null) )
      )
  }

  searchCapital(capital : string) : Observable<Country[]> {
    const url = this.urlBase + capital
    console.log(url)
    return this.http.get<Country[]>(url)
      .pipe(
        catchError( () => of([]) )
      )
  }

  searchCountry(country : string) : Observable<Country[]> {
    const url = this.urlBase + country
    return this.http.get<Country[]>(url)
      .pipe(
        catchError( () => of([]) )
      )
  }

  searchRegion(region: string) : Observable<Country[]> {
    const url = this.urlBase + region
    return this.http.get<Country[]>(url)
      .pipe(
        catchError( () => of([]) )
      )
  }
}
