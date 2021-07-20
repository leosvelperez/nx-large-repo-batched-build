import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1component155Component } from './lib2-lib1component155.component';

describe('Lib2Lib1component155Component', () => {
  let component: Lib2Lib1component155Component;
  let fixture: ComponentFixture<Lib2Lib1component155Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1component155Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1component155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
