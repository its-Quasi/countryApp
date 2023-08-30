import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activatedRoute : ActivatedRoute,
    private countryService : CountryService,
    private router : Router
  ){}

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(
          ({id}) => this.countryService.searchCountryByCode(id)
        ),
      )
      .subscribe(country => {
        if(!country) return this.router.navigateByUrl('')
        return this.country = country
      })

    // this.activatedRoute.params
    //   .subscribe((params : Params) => {
    //     const { id } = params
    //     this.countryService.searchCountryByCode(id)
    //       .subscribe(countries => {
    //         console.log(JSON.stringify(countries))
    //       })
    //   })
  }

}
