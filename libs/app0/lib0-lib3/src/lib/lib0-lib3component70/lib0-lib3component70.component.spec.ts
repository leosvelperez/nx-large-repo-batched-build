import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3component70Component } from './lib0-lib3component70.component';

describe('Lib0Lib3component70Component', () => {
  let component: Lib0Lib3component70Component;
  let fixture: ComponentFixture<Lib0Lib3component70Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3component70Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3component70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
