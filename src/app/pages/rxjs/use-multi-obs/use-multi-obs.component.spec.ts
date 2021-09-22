import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseMultiObsComponent } from './use-multi-obs.component';

describe('UseMultiObsComponent', () => {
  let component: UseMultiObsComponent;
  let fixture: ComponentFixture<UseMultiObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseMultiObsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseMultiObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
