import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib0component96Component } from './lib2-lib3-lib0component96.component';

describe('Lib2Lib3Lib0component96Component', () => {
  let component: Lib2Lib3Lib0component96Component;
  let fixture: ComponentFixture<Lib2Lib3Lib0component96Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib0component96Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib0component96Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
