import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component108Component } from './lib0component108.component';

describe('Lib0component108Component', () => {
  let component: Lib0component108Component;
  let fixture: ComponentFixture<Lib0component108Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component108Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
