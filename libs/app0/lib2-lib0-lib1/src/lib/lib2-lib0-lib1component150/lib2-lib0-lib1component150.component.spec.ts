import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib1component150Component } from './lib2-lib0-lib1component150.component';

describe('Lib2Lib0Lib1component150Component', () => {
  let component: Lib2Lib0Lib1component150Component;
  let fixture: ComponentFixture<Lib2Lib0Lib1component150Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib1component150Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib1component150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
