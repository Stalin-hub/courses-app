import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { tap, mapTo, share } from 'rxjs/operators';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const time = timer(1000);

    const obs = time.pipe(
      tap(() => console.log('Tap On'),
      ), 
      mapTo('End obs')
    );

    const subs01 = obs.subscribe(val => console.log('Sub1: ' + val));
    const subs02 = obs.subscribe(val => console.log('Sub2: ' + val));

    const shareObs = obs.pipe(share());
    // console.log('Share On');

    const subs03 = shareObs.subscribe(val => console.log('Sub3: ' + val));
    const subs04 = shareObs.subscribe(val => console.log('Sub4: ' + val));
    
  }

}
