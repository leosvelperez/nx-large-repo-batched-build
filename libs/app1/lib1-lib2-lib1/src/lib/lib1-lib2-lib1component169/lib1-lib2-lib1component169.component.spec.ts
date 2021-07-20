import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib1component169Component } from './lib1-lib2-lib1component169.component';

describe('Lib1Lib2Lib1component169Component', () => {
  let component: Lib1Lib2Lib1component169Component;
  let fixture: ComponentFixture<Lib1Lib2Lib1component169Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib1component169Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib1component169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
