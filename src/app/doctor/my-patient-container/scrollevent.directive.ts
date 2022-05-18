import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appScrollevent]'
})
export class ScrolleventDirective {

  @Output() onScroll : EventEmitter<Event>

  constructor() {
    this.onScroll = new EventEmitter<Event>()
  }

  @HostListener("scroll", ["$event"]) scrollDownEvent(event:any) {
    console.log(event);
    this.onScroll.emit(event)
  }

}
