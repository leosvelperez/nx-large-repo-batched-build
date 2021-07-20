import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib0component12Component } from './lib1-lib3-lib0component12.component';

describe('Lib1Lib3Lib0component12Component', () => {
  let component: Lib1Lib3Lib0component12Component;
  let fixture: ComponentFixture<Lib1Lib3Lib0component12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib0component12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib0component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
