import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib0component91Component } from './lib2-lib1-lib0component91.component';

describe('Lib2Lib1Lib0component91Component', () => {
  let component: Lib2Lib1Lib0component91Component;
  let fixture: ComponentFixture<Lib2Lib1Lib0component91Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib0component91Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib0component91Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
