import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib1component4Component } from './lib1-lib4-lib1component4.component';

describe('Lib1Lib4Lib1component4Component', () => {
  let component: Lib1Lib4Lib1component4Component;
  let fixture: ComponentFixture<Lib1Lib4Lib1component4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib1component4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib1component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
