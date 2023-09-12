import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  public capitalPlaceholder : string = 'Search By Capital...'
  public countries : Country[] = []
  public isLoading : boolean = false
  public initialValue = ''
  constructor(private countryService : CountryService){}
  ngOnInit(): void {
    const {key, countries} = this.countryService.store.bycapital
    this.initialValue = key === '' ? '' : key.split('/')[1]
    this.countries = countries
  }

  searchByCapital(term : string) : void {
    this.isLoading = true;
    this.countryService.searchCapital('capital/' + term)
      .subscribe(countries => {
        this.countries = countries
        this.isLoading = false;
      })
  }

}
