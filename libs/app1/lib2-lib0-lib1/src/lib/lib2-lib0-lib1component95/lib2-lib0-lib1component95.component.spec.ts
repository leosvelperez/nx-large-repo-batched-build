import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib1component95Component } from './lib2-lib0-lib1component95.component';

describe('Lib2Lib0Lib1component95Component', () => {
  let component: Lib2Lib0Lib1component95Component;
  let fixture: ComponentFixture<Lib2Lib0Lib1component95Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib1component95Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib1component95Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
