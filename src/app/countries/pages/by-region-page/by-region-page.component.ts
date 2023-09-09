import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  public regionPlaceholder = 'Search By Region...'
  public countries : Country[] = []
  public regions: string[] = ['asia','oceania','europe','americas','africa'];
  public selectedRegion?: string
  constructor(private countryService : CountryService) {}

  searchByRegion(term : string) : void {
    this.selectedRegion = term
    this.countryService.searchRegion('region/' + term)
      .subscribe(countries => this.countries = countries)

    localStorage.setItem('countryRegions' , JSON.stringify(this.countries))
  }
}
