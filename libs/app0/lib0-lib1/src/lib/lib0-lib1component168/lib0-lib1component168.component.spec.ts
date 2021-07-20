import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1component168Component } from './lib0-lib1component168.component';

describe('Lib0Lib1component168Component', () => {
  let component: Lib0Lib1component168Component;
  let fixture: ComponentFixture<Lib0Lib1component168Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1component168Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1component168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
