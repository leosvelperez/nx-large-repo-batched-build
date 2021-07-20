import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component129Component } from './lib0component129.component';

describe('Lib0component129Component', () => {
  let component: Lib0component129Component;
  let fixture: ComponentFixture<Lib0component129Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component129Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
