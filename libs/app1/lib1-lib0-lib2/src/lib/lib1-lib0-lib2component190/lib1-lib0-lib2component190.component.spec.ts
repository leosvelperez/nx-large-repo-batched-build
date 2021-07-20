import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib2component190Component } from './lib1-lib0-lib2component190.component';

describe('Lib1Lib0Lib2component190Component', () => {
  let component: Lib1Lib0Lib2component190Component;
  let fixture: ComponentFixture<Lib1Lib0Lib2component190Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib2component190Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib2component190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
