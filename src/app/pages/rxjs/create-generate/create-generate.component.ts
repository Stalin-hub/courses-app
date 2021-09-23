import { Component, OnInit } from '@angular/core';
import { Observable, generate } from 'rxjs';

@Component({
  selector: 'app-create-generate',
  templateUrl: './create-generate.component.html',
  styleUrls: ['./create-generate.component.css']
})
export class CreateGenerateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const obs = new Observable((observer) => {
    //   observer.next(1);
    //   observer.next(2);
    //   observer.next(3);
    //   observer.next(4);
    //   observer.next(5);
    //   observer.complete();
    // });
    // const sub = obs.subscribe(val => console.log(val));
    generate(
      1,
      i => i <= 5,
      i => i + 1
    ).subscribe(console.log);

  }

}
