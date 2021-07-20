import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1component125Component } from './lib0-lib1component125.component';

describe('Lib0Lib1component125Component', () => {
  let component: Lib0Lib1component125Component;
  let fixture: ComponentFixture<Lib0Lib1component125Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1component125Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1component125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
