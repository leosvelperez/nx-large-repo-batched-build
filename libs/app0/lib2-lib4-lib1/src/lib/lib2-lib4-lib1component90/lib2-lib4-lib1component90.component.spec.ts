import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib1component90Component } from './lib2-lib4-lib1component90.component';

describe('Lib2Lib4Lib1component90Component', () => {
  let component: Lib2Lib4Lib1component90Component;
  let fixture: ComponentFixture<Lib2Lib4Lib1component90Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib1component90Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib1component90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
