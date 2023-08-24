import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {
  public capitalPlaceholder : string = 'Search By Capital...'

  searchByCapital(term : string) : void {
    console.log('Desde By Capital Page' , term)
  }
}
