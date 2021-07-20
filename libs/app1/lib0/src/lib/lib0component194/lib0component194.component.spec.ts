import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component194Component } from './lib0component194.component';

describe('Lib0component194Component', () => {
  let component: Lib0component194Component;
  let fixture: ComponentFixture<Lib0component194Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component194Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
