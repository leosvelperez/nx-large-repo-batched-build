import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component143Component } from './lib0component143.component';

describe('Lib0component143Component', () => {
  let component: Lib0component143Component;
  let fixture: ComponentFixture<Lib0component143Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component143Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
