import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib1component15Component } from './lib1-lib4-lib1component15.component';

describe('Lib1Lib4Lib1component15Component', () => {
  let component: Lib1Lib4Lib1component15Component;
  let fixture: ComponentFixture<Lib1Lib4Lib1component15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib1component15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib1component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
