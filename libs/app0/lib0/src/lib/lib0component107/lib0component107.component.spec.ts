import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component107Component } from './lib0component107.component';

describe('Lib0component107Component', () => {
  let component: Lib0component107Component;
  let fixture: ComponentFixture<Lib0component107Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component107Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
