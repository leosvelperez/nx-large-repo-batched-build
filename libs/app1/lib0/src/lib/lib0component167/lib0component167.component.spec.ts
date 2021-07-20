import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component167Component } from './lib0component167.component';

describe('Lib0component167Component', () => {
  let component: Lib0component167Component;
  let fixture: ComponentFixture<Lib0component167Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component167Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
