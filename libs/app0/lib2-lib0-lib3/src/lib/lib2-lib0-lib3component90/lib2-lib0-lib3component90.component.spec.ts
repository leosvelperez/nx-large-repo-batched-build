import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib3component90Component } from './lib2-lib0-lib3component90.component';

describe('Lib2Lib0Lib3component90Component', () => {
  let component: Lib2Lib0Lib3component90Component;
  let fixture: ComponentFixture<Lib2Lib0Lib3component90Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib3component90Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib3component90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
