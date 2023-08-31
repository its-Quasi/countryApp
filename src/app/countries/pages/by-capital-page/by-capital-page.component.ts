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
  public isLoading : boolean = false
  constructor(private countryService : CountryService){}

  searchByCapital(term : string) : void {
    this.isLoading = true;
    this.countryService.searchCapital('capital/' + term)
      .subscribe(countries => {
        this.countries = countries
        this.isLoading = false;
      })
  }

}
