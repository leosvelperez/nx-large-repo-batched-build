import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component138Component } from './lib0component138.component';

describe('Lib0component138Component', () => {
  let component: Lib0component138Component;
  let fixture: ComponentFixture<Lib0component138Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component138Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
