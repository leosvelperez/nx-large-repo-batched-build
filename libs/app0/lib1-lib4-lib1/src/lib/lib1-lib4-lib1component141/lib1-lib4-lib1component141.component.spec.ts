import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib1component141Component } from './lib1-lib4-lib1component141.component';

describe('Lib1Lib4Lib1component141Component', () => {
  let component: Lib1Lib4Lib1component141Component;
  let fixture: ComponentFixture<Lib1Lib4Lib1component141Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib1component141Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib1component141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
