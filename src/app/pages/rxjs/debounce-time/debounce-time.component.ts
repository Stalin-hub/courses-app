import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const search = document.getElementById('search') as HTMLElement;

    const keyup = fromEvent(search, 'keyup');

    keyup.pipe(
      map((e: any) => e.currentTarget.value),
      debounceTime(1000)
    ).subscribe(console.log);
  }

}
