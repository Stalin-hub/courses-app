import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticastSubjectComponent } from './multicast-subject.component';

describe('MulticastSubjectComponent', () => {
  let component: MulticastSubjectComponent;
  let fixture: ComponentFixture<MulticastSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulticastSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MulticastSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
