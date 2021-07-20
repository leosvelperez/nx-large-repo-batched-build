import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component148Component } from './lib0component148.component';

describe('Lib0component148Component', () => {
  let component: Lib0component148Component;
  let fixture: ComponentFixture<Lib0component148Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component148Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
