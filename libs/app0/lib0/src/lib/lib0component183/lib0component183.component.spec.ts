import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component183Component } from './lib0component183.component';

describe('Lib0component183Component', () => {
  let component: Lib0component183Component;
  let fixture: ComponentFixture<Lib0component183Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component183Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});