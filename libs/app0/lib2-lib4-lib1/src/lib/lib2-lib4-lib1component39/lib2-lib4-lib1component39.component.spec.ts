import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib1component39Component } from './lib2-lib4-lib1component39.component';

describe('Lib2Lib4Lib1component39Component', () => {
  let component: Lib2Lib4Lib1component39Component;
  let fixture: ComponentFixture<Lib2Lib4Lib1component39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib1component39Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib1component39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
