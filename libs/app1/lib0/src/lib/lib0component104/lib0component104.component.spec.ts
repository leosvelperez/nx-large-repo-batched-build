import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component104Component } from './lib0component104.component';

describe('Lib0component104Component', () => {
  let component: Lib0component104Component;
  let fixture: ComponentFixture<Lib0component104Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component104Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
