import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextErrorComplComponent } from './next-error-compl.component';

describe('NextErrorComplComponent', () => {
  let component: NextErrorComplComponent;
  let fixture: ComponentFixture<NextErrorComplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextErrorComplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextErrorComplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
