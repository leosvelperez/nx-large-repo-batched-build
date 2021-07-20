import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib3component199Component } from './lib2-lib4-lib3component199.component';

describe('Lib2Lib4Lib3component199Component', () => {
  let component: Lib2Lib4Lib3component199Component;
  let fixture: ComponentFixture<Lib2Lib4Lib3component199Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib3component199Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib3component199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
