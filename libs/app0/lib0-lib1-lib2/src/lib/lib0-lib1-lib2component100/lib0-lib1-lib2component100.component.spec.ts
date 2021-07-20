import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib2component100Component } from './lib0-lib1-lib2component100.component';

describe('Lib0Lib1Lib2component100Component', () => {
  let component: Lib0Lib1Lib2component100Component;
  let fixture: ComponentFixture<Lib0Lib1Lib2component100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib2component100Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib2component100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
