import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib0component45Component } from './lib1-lib3-lib0component45.component';

describe('Lib1Lib3Lib0component45Component', () => {
  let component: Lib1Lib3Lib0component45Component;
  let fixture: ComponentFixture<Lib1Lib3Lib0component45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib0component45Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib0component45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});