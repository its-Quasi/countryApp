import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { MapCountriesData } from '../interfaces/store.interface';

@Injectable({providedIn: 'root'})
export class CountryService {

  private urlBase : string = 'https://restcountries.com/v3.1/'

  public store  : MapCountriesData = {
    bycapital : {
      key : '', countries : []
    },
    byregion : {
      key : '', countries : []
    },
    bycountry : {
      key : '', countries : []
    }
  }

  constructor(private http: HttpClient) {
    console.log('countries service init')
  }

  searchCountryByCode(code : string) : Observable<Country | null> {
    const url = this.urlBase + 'alpha/' + code
    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0? countries[0] : null),
        catchError( () => of(null) )
      )
  }

  private getCountriesRequest(url : string) : Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(
      catchError(() => of([]))
    )
  }

  searchCapital(capital : string) : Observable<Country[]> {
    const url = this.urlBase + capital
    return this.getCountriesRequest(url).pipe(
      tap(
        (countries :  Country[]) => this.store.bycapital = { key : capital , countries }
      )
    )
  }

  searchCountry(country : string) : Observable<Country[]> {
    const url = this.urlBase + country
    return this.getCountriesRequest(url).pipe(
      tap(
        (countries :  Country[]) => this.store.bycountry = { key : country , countries }
      )
    )
  }

  searchRegion(region: string) : Observable<Country[]> {
    const url = this.urlBase + region
    return this.getCountriesRequest(url).pipe(
      tap(
        (countries :  Country[]) => this.store.byregion = { key : region , countries }
      )
    )
  }
}
