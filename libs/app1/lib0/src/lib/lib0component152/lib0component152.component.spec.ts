import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component152Component } from './lib0component152.component';

describe('Lib0component152Component', () => {
  let component: Lib0component152Component;
  let fixture: ComponentFixture<Lib0component152Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component152Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
