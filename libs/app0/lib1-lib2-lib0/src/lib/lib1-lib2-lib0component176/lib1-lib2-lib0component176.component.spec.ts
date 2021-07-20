import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib0component176Component } from './lib1-lib2-lib0component176.component';

describe('Lib1Lib2Lib0component176Component', () => {
  let component: Lib1Lib2Lib0component176Component;
  let fixture: ComponentFixture<Lib1Lib2Lib0component176Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib0component176Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib0component176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
