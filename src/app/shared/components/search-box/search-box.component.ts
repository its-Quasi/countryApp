import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(600)
    )
    .subscribe(value => {
      this.onDebounce.emit(value)
    })
  }

  private debouncer = new Subject<string>()

  @Input()
  public placeholder : string = 'Search by...'

  @Output()
  onValue = new EventEmitter<string>();

  @Output()
  onDebounce = new EventEmitter<string>()

  emitValue(value : string) {
    this.onValue.emit(value)
  }
  onKeyPress(searchTerm : string) {
    this.debouncer.next(searchTerm)
  }
}
