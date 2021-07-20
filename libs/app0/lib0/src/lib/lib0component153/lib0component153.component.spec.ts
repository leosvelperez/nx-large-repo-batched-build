import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component153Component } from './lib0component153.component';

describe('Lib0component153Component', () => {
  let component: Lib0component153Component;
  let fixture: ComponentFixture<Lib0component153Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component153Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
