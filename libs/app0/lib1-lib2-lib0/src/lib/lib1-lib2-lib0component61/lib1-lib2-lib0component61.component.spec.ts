import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib0component61Component } from './lib1-lib2-lib0component61.component';

describe('Lib1Lib2Lib0component61Component', () => {
  let component: Lib1Lib2Lib0component61Component;
  let fixture: ComponentFixture<Lib1Lib2Lib0component61Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib0component61Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib0component61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
