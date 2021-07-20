import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib0component85Component } from './lib1-lib3-lib0component85.component';

describe('Lib1Lib3Lib0component85Component', () => {
  let component: Lib1Lib3Lib0component85Component;
  let fixture: ComponentFixture<Lib1Lib3Lib0component85Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib0component85Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib0component85Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
