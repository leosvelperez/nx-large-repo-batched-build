import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib0component125Component } from './lib1-lib0-lib0component125.component';

describe('Lib1Lib0Lib0component125Component', () => {
  let component: Lib1Lib0Lib0component125Component;
  let fixture: ComponentFixture<Lib1Lib0Lib0component125Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib0component125Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib0component125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
