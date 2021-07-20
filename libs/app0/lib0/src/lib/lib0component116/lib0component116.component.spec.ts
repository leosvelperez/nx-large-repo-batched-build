import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component116Component } from './lib0component116.component';

describe('Lib0component116Component', () => {
  let component: Lib0component116Component;
  let fixture: ComponentFixture<Lib0component116Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component116Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
