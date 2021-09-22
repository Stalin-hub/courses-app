import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeFlatMapComponent } from './merge-flat-map.component';

describe('MergeFlatMapComponent', () => {
  let component: MergeFlatMapComponent;
  let fixture: ComponentFixture<MergeFlatMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeFlatMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeFlatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
