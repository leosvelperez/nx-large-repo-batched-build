import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib0component30Component } from './lib1-lib3-lib0component30.component';

describe('Lib1Lib3Lib0component30Component', () => {
  let component: Lib1Lib3Lib0component30Component;
  let fixture: ComponentFixture<Lib1Lib3Lib0component30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib0component30Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib0component30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});