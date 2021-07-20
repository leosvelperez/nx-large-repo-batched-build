import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component145Component } from './lib0component145.component';

describe('Lib0component145Component', () => {
  let component: Lib0component145Component;
  let fixture: ComponentFixture<Lib0component145Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component145Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
