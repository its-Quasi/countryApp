import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public capitalPlaceholder : string = 'Search By Capital...'
  public countries : Country[] = []
  constructor(private countryService : CountryService){}

  searchByCapital(term : string) : void {
    this.countryService.searchCapital('capital/' + term)
      .subscribe(countries => this.countries = countries)
  }

}
