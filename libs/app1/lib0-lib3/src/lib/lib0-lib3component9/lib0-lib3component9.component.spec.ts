import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3component9Component } from './lib0-lib3component9.component';

describe('Lib0Lib3component9Component', () => {
  let component: Lib0Lib3component9Component;
  let fixture: ComponentFixture<Lib0Lib3component9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3component9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
