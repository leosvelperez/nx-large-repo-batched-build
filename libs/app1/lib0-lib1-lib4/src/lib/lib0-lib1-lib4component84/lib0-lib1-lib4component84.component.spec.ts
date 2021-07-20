import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib4component84Component } from './lib0-lib1-lib4component84.component';

describe('Lib0Lib1Lib4component84Component', () => {
  let component: Lib0Lib1Lib4component84Component;
  let fixture: ComponentFixture<Lib0Lib1Lib4component84Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib4component84Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib4component84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
