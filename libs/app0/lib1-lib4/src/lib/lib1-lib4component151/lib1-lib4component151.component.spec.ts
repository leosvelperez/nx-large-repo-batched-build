import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4component151Component } from './lib1-lib4component151.component';

describe('Lib1Lib4component151Component', () => {
  let component: Lib1Lib4component151Component;
  let fixture: ComponentFixture<Lib1Lib4component151Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4component151Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4component151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
