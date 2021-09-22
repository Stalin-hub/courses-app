import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // When buffer is 1 ReplaySubject(1), get the final object that isn't null.
    const obs = new ReplaySubject(4);
    obs.next(1);
    obs.next(2);
    obs.next(3);
    obs.subscribe(console.log);
    obs.next(4);
    obs.next(5);
    obs.subscribe(console.log);
  }

}
