import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component137Component } from './lib0component137.component';

describe('Lib0component137Component', () => {
  let component: Lib0component137Component;
  let fixture: ComponentFixture<Lib0component137Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component137Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
