import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component128Component } from './lib0component128.component';

describe('Lib0component128Component', () => {
  let component: Lib0component128Component;
  let fixture: ComponentFixture<Lib0component128Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component128Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
