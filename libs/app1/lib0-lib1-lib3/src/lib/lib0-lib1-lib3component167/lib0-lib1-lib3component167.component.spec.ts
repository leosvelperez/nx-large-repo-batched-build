import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib3component167Component } from './lib0-lib1-lib3component167.component';

describe('Lib0Lib1Lib3component167Component', () => {
  let component: Lib0Lib1Lib3component167Component;
  let fixture: ComponentFixture<Lib0Lib1Lib3component167Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib3component167Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib3component167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
