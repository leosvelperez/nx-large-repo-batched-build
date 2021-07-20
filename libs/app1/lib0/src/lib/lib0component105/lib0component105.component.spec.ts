import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component105Component } from './lib0component105.component';

describe('Lib0component105Component', () => {
  let component: Lib0component105Component;
  let fixture: ComponentFixture<Lib0component105Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component105Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
