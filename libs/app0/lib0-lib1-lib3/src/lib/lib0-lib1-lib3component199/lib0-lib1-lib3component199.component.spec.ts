import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib3component199Component } from './lib0-lib1-lib3component199.component';

describe('Lib0Lib1Lib3component199Component', () => {
  let component: Lib0Lib1Lib3component199Component;
  let fixture: ComponentFixture<Lib0Lib1Lib3component199Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib3component199Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib3component199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
