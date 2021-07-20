import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib4component48Component } from './lib1-lib4-lib4component48.component';

describe('Lib1Lib4Lib4component48Component', () => {
  let component: Lib1Lib4Lib4component48Component;
  let fixture: ComponentFixture<Lib1Lib4Lib4component48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib4component48Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib4component48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
