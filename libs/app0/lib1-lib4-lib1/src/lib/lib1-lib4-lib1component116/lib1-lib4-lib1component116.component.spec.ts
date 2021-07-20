import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib1component116Component } from './lib1-lib4-lib1component116.component';

describe('Lib1Lib4Lib1component116Component', () => {
  let component: Lib1Lib4Lib1component116Component;
  let fixture: ComponentFixture<Lib1Lib4Lib1component116Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib1component116Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib1component116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
