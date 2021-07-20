import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib1component125Component } from './lib2-lib0-lib1component125.component';

describe('Lib2Lib0Lib1component125Component', () => {
  let component: Lib2Lib0Lib1component125Component;
  let fixture: ComponentFixture<Lib2Lib0Lib1component125Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib1component125Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib1component125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
