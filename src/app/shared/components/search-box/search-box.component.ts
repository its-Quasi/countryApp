import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @Input()
  public placeholder : string = 'Search by...'

  @Output()
  onValue = new EventEmitter<string>();

  emitValue(value : string) {
    this.onValue.emit(value)
  }
}
