import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0Lib3component14Component } from './lib0-lib0-lib3component14.component';

describe('Lib0Lib0Lib3component14Component', () => {
  let component: Lib0Lib0Lib3component14Component;
  let fixture: ComponentFixture<Lib0Lib0Lib3component14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0Lib3component14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0Lib3component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
