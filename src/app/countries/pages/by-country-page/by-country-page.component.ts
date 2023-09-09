import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {
  public placeholder = 'Search by Country...'
  public countries : Country[] = []
  public initialValue : string = ''
  constructor(private countryService : CountryService){}

  ngOnInit(): void {
    const {key, countries} = this.countryService.store.bycountry
    this.initialValue = key === '' ? '' : key.split('/')[1]
    this.countries = countries
  }

  searchByCountry(term: string) : void {
    this.countryService.searchCountry('name/' + term)
      .subscribe(countries => this.countries = countries)
  }
}
