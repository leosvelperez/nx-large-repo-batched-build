import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib0component34Component } from './lib1-lib3-lib0component34.component';

describe('Lib1Lib3Lib0component34Component', () => {
  let component: Lib1Lib3Lib0component34Component;
  let fixture: ComponentFixture<Lib1Lib3Lib0component34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib0component34Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib0component34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});