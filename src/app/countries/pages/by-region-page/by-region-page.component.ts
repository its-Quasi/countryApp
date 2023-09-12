import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {
  public regionPlaceholder = 'Search By Region...'
  public countries : Country[] = []
  public regions: string[] = ['asia','oceania','europe','americas','africa'];
  public selectedRegion?: string
  constructor(private countryService : CountryService) {}

  ngOnInit(): void {
    const {key, countries} = this.countryService.store.byregion
    if(key) {
      this.selectedRegion = this.getRegion(key)
      console.log('building region component', this.selectedRegion)
    }
    this.countries = countries
  }

  searchByRegion(term : string) : void {
    this.selectedRegion = term
    this.countryService.searchRegion('region/' + term)
      .subscribe(countries => this.countries = countries)

    localStorage.setItem('countryRegions' , JSON.stringify(this.countries))
  }
  private getRegion = (path : string) => path.substring(path.indexOf('/') + 1)
}
