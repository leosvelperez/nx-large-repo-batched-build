import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component199Component } from './lib1component199.component';

describe('Lib1component199Component', () => {
  let component: Lib1component199Component;
  let fixture: ComponentFixture<Lib1component199Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component199Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
