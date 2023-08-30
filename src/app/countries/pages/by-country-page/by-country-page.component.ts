import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {
  public placeholder = 'Search by Country...'
  public countries : Country[] = []
  constructor(private countryService : CountryService){}

  searchByCountry(term: string) : void {
    this.countryService.searchCountry('name/' + term)
      .subscribe(countries => this.countries = countries)
  }
}
