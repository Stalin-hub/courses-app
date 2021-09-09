import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-next-error-compl',
  templateUrl: './next-error-compl.component.html',
  styleUrls: ['./next-error-compl.component.css']
})
export class NextErrorComplComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    const myObservable = new Observable(function (observer) {
      observer.next(1);
      observer.next(2);
      // Error dentro de una condicional - Lo que está después ya no se ejecuta.
      observer.error('Error 1');
      observer.next(3);
      observer.complete();
    });

    const subs = myObservable.subscribe({
      next: x => console.log('El siguiente valor es: ' + x),
      error: err => console.log('Error: ' + err),
      complete: () => console.log('Suscripción completa')  
    });

    subs.unsubscribe();
  }

  public ngOnDestroy(): void {

  }

}
