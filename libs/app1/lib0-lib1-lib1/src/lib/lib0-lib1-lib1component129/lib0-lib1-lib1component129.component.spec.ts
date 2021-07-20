import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib1component129Component } from './lib0-lib1-lib1component129.component';

describe('Lib0Lib1Lib1component129Component', () => {
  let component: Lib0Lib1Lib1component129Component;
  let fixture: ComponentFixture<Lib0Lib1Lib1component129Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib1component129Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib1component129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
