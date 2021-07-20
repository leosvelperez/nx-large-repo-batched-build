import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib2component91Component } from './lib1-lib0-lib2component91.component';

describe('Lib1Lib0Lib2component91Component', () => {
  let component: Lib1Lib0Lib2component91Component;
  let fixture: ComponentFixture<Lib1Lib0Lib2component91Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib2component91Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib2component91Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
