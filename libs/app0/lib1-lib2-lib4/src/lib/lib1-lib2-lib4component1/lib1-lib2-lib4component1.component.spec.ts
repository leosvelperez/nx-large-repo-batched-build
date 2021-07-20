import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib4component1Component } from './lib1-lib2-lib4component1.component';

describe('Lib1Lib2Lib4component1Component', () => {
  let component: Lib1Lib2Lib4component1Component;
  let fixture: ComponentFixture<Lib1Lib2Lib4component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib4component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib4component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
