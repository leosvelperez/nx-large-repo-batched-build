import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib1component178Component } from './lib2-lib4-lib1component178.component';

describe('Lib2Lib4Lib1component178Component', () => {
  let component: Lib2Lib4Lib1component178Component;
  let fixture: ComponentFixture<Lib2Lib4Lib1component178Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib1component178Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib1component178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
