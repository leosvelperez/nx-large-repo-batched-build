import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib1component199Component } from './lib2-lib0-lib1component199.component';

describe('Lib2Lib0Lib1component199Component', () => {
  let component: Lib2Lib0Lib1component199Component;
  let fixture: ComponentFixture<Lib2Lib0Lib1component199Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib1component199Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib1component199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
