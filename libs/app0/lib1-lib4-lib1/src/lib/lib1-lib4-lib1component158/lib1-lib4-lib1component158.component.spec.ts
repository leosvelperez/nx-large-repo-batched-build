import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib1component158Component } from './lib1-lib4-lib1component158.component';

describe('Lib1Lib4Lib1component158Component', () => {
  let component: Lib1Lib4Lib1component158Component;
  let fixture: ComponentFixture<Lib1Lib4Lib1component158Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib1component158Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib1component158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});