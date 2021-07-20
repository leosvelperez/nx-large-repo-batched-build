import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component102Component } from './lib0component102.component';

describe('Lib0component102Component', () => {
  let component: Lib0component102Component;
  let fixture: ComponentFixture<Lib0component102Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component102Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
