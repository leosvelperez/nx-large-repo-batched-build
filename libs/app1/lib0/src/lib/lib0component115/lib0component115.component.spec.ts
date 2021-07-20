import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component115Component } from './lib0component115.component';

describe('Lib0component115Component', () => {
  let component: Lib0component115Component;
  let fixture: ComponentFixture<Lib0component115Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component115Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
