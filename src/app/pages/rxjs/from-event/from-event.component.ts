import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit {

  @ViewChild('element') element: ElementRef;

  constructor() { 
  }

  ngOnInit(): void {
    const el = document.getElementById('element') as HTMLElement;
    const mouseMove = fromEvent(el, 'mousemove');

    mouseMove.subscribe((e: any) => {
      console.log('Coords: x= ' + e.clientX + ' y= ' + e.clientY);
    });
  }

}
