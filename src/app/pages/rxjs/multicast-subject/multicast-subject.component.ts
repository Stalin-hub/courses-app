import { Component, OnInit } from '@angular/core';
import { from, Subject, ConnectableObservable, interval } from 'rxjs';
import { multicast, tap } from 'rxjs/operators';

@Component({
  selector: 'app-multicast-subject',
  templateUrl: './multicast-subject.component.html',
  styleUrls: ['./multicast-subject.component.css']
})
export class MulticastSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const source = from([1, 2, 3, 4]);
    // const multi = source.pipe(multicast(() => new Subject())) as ConnectableObservable<any>;

    // multi.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`)
    // });
    // multi.subscribe({
    //   next: (v) => console.log(`observerB: ${v}`)
    // });

    // multi.connect();

    const source = interval(3000).pipe(
      tap((n) => console.log('ID: '+n))
    );

    const multi = source.pipe(multicast(() => new Subject())) as ConnectableObservable<any>;

    multi.subscribe(v => console.log('localhost:4200/' + v));
    multi.subscribe(v => console.log('localhost:4200/' + (v - 1)));

    multi.connect();
  }

}
