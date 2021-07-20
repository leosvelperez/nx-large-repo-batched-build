import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib0component190Component } from './lib1-lib3-lib0component190.component';

describe('Lib1Lib3Lib0component190Component', () => {
  let component: Lib1Lib3Lib0component190Component;
  let fixture: ComponentFixture<Lib1Lib3Lib0component190Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib0component190Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib0component190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
