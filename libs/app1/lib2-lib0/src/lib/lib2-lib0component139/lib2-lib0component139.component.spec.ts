import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0component139Component } from './lib2-lib0component139.component';

describe('Lib2Lib0component139Component', () => {
  let component: Lib2Lib0component139Component;
  let fixture: ComponentFixture<Lib2Lib0component139Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0component139Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0component139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});