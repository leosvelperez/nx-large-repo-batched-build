import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib0component65Component } from './lib1-lib3-lib0component65.component';

describe('Lib1Lib3Lib0component65Component', () => {
  let component: Lib1Lib3Lib0component65Component;
  let fixture: ComponentFixture<Lib1Lib3Lib0component65Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib0component65Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib0component65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
