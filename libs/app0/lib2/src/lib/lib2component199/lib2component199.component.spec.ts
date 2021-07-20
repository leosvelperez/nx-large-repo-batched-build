import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component199Component } from './lib2component199.component';

describe('Lib2component199Component', () => {
  let component: Lib2component199Component;
  let fixture: ComponentFixture<Lib2component199Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component199Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
