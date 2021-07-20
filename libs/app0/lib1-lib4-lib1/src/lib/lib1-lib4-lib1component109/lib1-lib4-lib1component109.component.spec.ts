import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib1component109Component } from './lib1-lib4-lib1component109.component';

describe('Lib1Lib4Lib1component109Component', () => {
  let component: Lib1Lib4Lib1component109Component;
  let fixture: ComponentFixture<Lib1Lib4Lib1component109Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib1component109Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib1component109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
