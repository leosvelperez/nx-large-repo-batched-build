import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib0component125Component } from './lib0-lib3-lib0component125.component';

describe('Lib0Lib3Lib0component125Component', () => {
  let component: Lib0Lib3Lib0component125Component;
  let fixture: ComponentFixture<Lib0Lib3Lib0component125Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib0component125Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib0component125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
