import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4component27Component } from './lib1-lib4component27.component';

describe('Lib1Lib4component27Component', () => {
  let component: Lib1Lib4component27Component;
  let fixture: ComponentFixture<Lib1Lib4component27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4component27Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
