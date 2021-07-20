import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib4component57Component } from './lib1-lib4-lib4component57.component';

describe('Lib1Lib4Lib4component57Component', () => {
  let component: Lib1Lib4Lib4component57Component;
  let fixture: ComponentFixture<Lib1Lib4Lib4component57Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib4component57Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib4component57Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
