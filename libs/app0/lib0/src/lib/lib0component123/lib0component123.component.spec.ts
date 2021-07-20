import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component123Component } from './lib0component123.component';

describe('Lib0component123Component', () => {
  let component: Lib0component123Component;
  let fixture: ComponentFixture<Lib0component123Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component123Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
