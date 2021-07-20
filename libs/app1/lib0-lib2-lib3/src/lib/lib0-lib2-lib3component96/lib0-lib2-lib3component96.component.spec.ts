import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib3component96Component } from './lib0-lib2-lib3component96.component';

describe('Lib0Lib2Lib3component96Component', () => {
  let component: Lib0Lib2Lib3component96Component;
  let fixture: ComponentFixture<Lib0Lib2Lib3component96Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib3component96Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib3component96Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
