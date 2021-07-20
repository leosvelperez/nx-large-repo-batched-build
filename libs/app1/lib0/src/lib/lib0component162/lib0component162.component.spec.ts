import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component162Component } from './lib0component162.component';

describe('Lib0component162Component', () => {
  let component: Lib0component162Component;
  let fixture: ComponentFixture<Lib0component162Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component162Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
