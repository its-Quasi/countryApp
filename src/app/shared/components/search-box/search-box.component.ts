import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe()
  }

  ngOnInit(): void {
    const time = 600
    this.debouncerSubscription = this.debouncer
    .pipe(
      debounceTime(time) // hasta que no pasen 'time' ms, no pasa el subscribe :D
    )
    .subscribe(value => {
      this.onDebounce.emit(value)
    })
  }

  private debouncer = new Subject<string>()
  private debouncerSubscription?: Subscription

  @Input()
  public placeholder : string = 'Search by...'

  @Input()
  public initialValue : string = ''

  @Output()
  onValue = new EventEmitter<string>();

  @Output()
  onDebounce = new EventEmitter<string>()

  emitValue(value : string) {
    this.onValue.emit(value)
  }
  onKeyPress(searchTerm : string) {
    this.debouncer.next(searchTerm) // siguiente emision del observable
  }
}
