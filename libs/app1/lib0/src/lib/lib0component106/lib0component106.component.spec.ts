import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component106Component } from './lib0component106.component';

describe('Lib0component106Component', () => {
  let component: Lib0component106Component;
  let fixture: ComponentFixture<Lib0component106Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component106Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
