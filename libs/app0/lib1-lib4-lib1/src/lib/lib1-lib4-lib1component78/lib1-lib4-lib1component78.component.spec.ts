import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib1component78Component } from './lib1-lib4-lib1component78.component';

describe('Lib1Lib4Lib1component78Component', () => {
  let component: Lib1Lib4Lib1component78Component;
  let fixture: ComponentFixture<Lib1Lib4Lib1component78Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib1component78Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib1component78Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
