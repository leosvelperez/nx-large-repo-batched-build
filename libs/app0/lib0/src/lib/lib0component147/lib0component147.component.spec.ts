import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component147Component } from './lib0component147.component';

describe('Lib0component147Component', () => {
  let component: Lib0component147Component;
  let fixture: ComponentFixture<Lib0component147Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component147Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
