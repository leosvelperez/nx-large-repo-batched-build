import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib1component14Component } from './lib2-lib4-lib1component14.component';

describe('Lib2Lib4Lib1component14Component', () => {
  let component: Lib2Lib4Lib1component14Component;
  let fixture: ComponentFixture<Lib2Lib4Lib1component14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib1component14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib1component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
