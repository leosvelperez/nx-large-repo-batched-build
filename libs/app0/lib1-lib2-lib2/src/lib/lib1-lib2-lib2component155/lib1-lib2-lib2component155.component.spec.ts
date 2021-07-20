import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib2component155Component } from './lib1-lib2-lib2component155.component';

describe('Lib1Lib2Lib2component155Component', () => {
  let component: Lib1Lib2Lib2component155Component;
  let fixture: ComponentFixture<Lib1Lib2Lib2component155Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib2component155Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib2component155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
