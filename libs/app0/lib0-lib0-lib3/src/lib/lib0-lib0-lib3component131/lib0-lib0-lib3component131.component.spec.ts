import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0Lib3component131Component } from './lib0-lib0-lib3component131.component';

describe('Lib0Lib0Lib3component131Component', () => {
  let component: Lib0Lib0Lib3component131Component;
  let fixture: ComponentFixture<Lib0Lib0Lib3component131Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0Lib3component131Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0Lib3component131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});