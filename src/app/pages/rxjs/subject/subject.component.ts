import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // <number> receive only numeric values
    const subject = new Subject<any>();

    subject.subscribe({
      next: (n) => console.log(`obsA: ${n[0]}`)  
    });
    subject.subscribe({
      next: (n) => console.log(`obsB: ${n[0] + n[1]}`)
    });

    subject.next([1, 2]);
    subject.next([2, 3]);
  }

}
