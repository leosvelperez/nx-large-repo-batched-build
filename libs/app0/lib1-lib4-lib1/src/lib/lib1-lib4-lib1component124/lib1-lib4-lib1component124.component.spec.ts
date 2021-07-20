import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib1component124Component } from './lib1-lib4-lib1component124.component';

describe('Lib1Lib4Lib1component124Component', () => {
  let component: Lib1Lib4Lib1component124Component;
  let fixture: ComponentFixture<Lib1Lib4Lib1component124Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib1component124Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib1component124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
