import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib4component42Component } from './lib1-lib4-lib4component42.component';

describe('Lib1Lib4Lib4component42Component', () => {
  let component: Lib1Lib4Lib4component42Component;
  let fixture: ComponentFixture<Lib1Lib4Lib4component42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib4component42Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib4component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
