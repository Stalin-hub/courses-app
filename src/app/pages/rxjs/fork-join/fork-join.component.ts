import { Component, OnInit } from '@angular/core';
import { delay, take } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { forkJoin, of, interval } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css']
})
export class ForkJoinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const fork = forkJoin([
    //   of('Hola'),
    //   of('Mundo').pipe(delay(500)),
    //   interval(1000).pipe(take(2))
    // ]);

    // fork.subscribe(val => console.log(val));

    // Real life example
    const src = forkJoin(
      {
        google: ajax.getJSON('https://api.github.com/users/google'),
        microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
        ctmil: ajax.getJSON('https://api.github.com/users/ctmil')
      }
    );

    src.subscribe(console.log);
  }

}
