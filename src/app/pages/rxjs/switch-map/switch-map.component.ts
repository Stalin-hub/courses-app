import { Component, OnInit } from '@angular/core';
import { interval, fromEvent, merge, empty } from 'rxjs';
import { switchMap, scan, takeWhile, startWith, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // fromEvent(document, 'click').pipe(switchMap(() => interval(1000))).subscribe(console.log);
    const remainingLabel = document.getElementById('remaining') as HTMLLabelElement;
    const pauseButton = document.getElementById('pause') as HTMLButtonElement;
    const resumeButton = document.getElementById('resume') as HTMLButtonElement;

    const obsInterval = interval(1000).pipe(mapTo(-1));
    const pause = fromEvent(pauseButton, 'click').pipe(mapTo(false));
    const resume = fromEvent(resumeButton, 'click').pipe(mapTo(true));

    const timer = merge(pause, resume).pipe(
      startWith(true),
      switchMap(val => (val ? obsInterval : empty())),
      scan((acc, curr) => (curr ? curr + acc : acc), 30),
      takeWhile(v => v >=0)
    ).subscribe(
      ((val: any) => (remainingLabel.innerHTML = val))
    );
  }

}
