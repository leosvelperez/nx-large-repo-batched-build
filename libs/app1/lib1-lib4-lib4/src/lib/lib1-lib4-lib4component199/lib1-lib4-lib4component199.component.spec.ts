import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib4component199Component } from './lib1-lib4-lib4component199.component';

describe('Lib1Lib4Lib4component199Component', () => {
  let component: Lib1Lib4Lib4component199Component;
  let fixture: ComponentFixture<Lib1Lib4Lib4component199Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib4component199Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib4component199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
