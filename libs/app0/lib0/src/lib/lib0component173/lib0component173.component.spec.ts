import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component173Component } from './lib0component173.component';

describe('Lib0component173Component', () => {
  let component: Lib0component173Component;
  let fixture: ComponentFixture<Lib0component173Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component173Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
