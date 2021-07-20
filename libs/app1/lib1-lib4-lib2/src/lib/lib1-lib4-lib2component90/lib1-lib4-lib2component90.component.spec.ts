import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib2component90Component } from './lib1-lib4-lib2component90.component';

describe('Lib1Lib4Lib2component90Component', () => {
  let component: Lib1Lib4Lib2component90Component;
  let fixture: ComponentFixture<Lib1Lib4Lib2component90Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib2component90Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib2component90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
