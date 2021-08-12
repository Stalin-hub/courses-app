import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})

export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const contador = interval(1000);
    // const time = timer(2000);

    // contador.subscribe((n) => {
    //   console.log('Cada ' + n + ' segundos');
    // });

    // time.subscribe((n) => {
    //   console.log('Triggered');
    // });
  }

}
