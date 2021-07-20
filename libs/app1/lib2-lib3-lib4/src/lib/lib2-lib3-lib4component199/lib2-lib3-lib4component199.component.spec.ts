import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib4component199Component } from './lib2-lib3-lib4component199.component';

describe('Lib2Lib3Lib4component199Component', () => {
  let component: Lib2Lib3Lib4component199Component;
  let fixture: ComponentFixture<Lib2Lib3Lib4component199Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib4component199Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib4component199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
