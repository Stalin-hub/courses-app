import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-merge-flat-map',
  templateUrl: './merge-flat-map.component.html',
  styleUrls: ['./merge-flat-map.component.css']
})
export class MergeFlatMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const source = of(2000, 1000, 3000);
    // const obsMerge = source.pipe(
    //   mergeMap(v => of(`Valor: ${v}`).pipe(delay(v)))
    // );

    // obsMerge.subscribe(
    //   v => console.log(v)
    // );

    // Real life example
    const source = of(
      ajax.getJSON('https://api.github.com/users/Stalin-hub'),
      ajax.getJSON('https://api.github.com/users/ctmil'),
      ajax.getJSON('https://api.github.com/users/google'),
      ajax.getJSON('https://api.github.com/users/microsoft')
    );

    const obsMerge = source.pipe(
      mergeMap(v => v)
    );

    obsMerge.subscribe(
      v => console.log(v)  
    );
  }

}
