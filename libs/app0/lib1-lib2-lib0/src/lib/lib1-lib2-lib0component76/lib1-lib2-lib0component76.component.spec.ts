import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib0component76Component } from './lib1-lib2-lib0component76.component';

describe('Lib1Lib2Lib0component76Component', () => {
  let component: Lib1Lib2Lib0component76Component;
  let fixture: ComponentFixture<Lib1Lib2Lib0component76Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib0component76Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib0component76Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
