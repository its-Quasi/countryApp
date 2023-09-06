import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';


type Region = 'asia'|'oceania'|'europe'|'americas'|'africa'

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  public regionPlaceholder = 'Search By Region...'
  public countries : Country[] = []
  public region?: Region;
  constructor(private countryService : CountryService) {}

  searchByRegion(term : string) : void {
    this.countryService.searchRegion('region/' + term)
      .subscribe(countries => this.countries = countries)
  }
}
