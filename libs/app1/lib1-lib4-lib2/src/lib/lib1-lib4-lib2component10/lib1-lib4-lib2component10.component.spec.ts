import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib2component10Component } from './lib1-lib4-lib2component10.component';

describe('Lib1Lib4Lib2component10Component', () => {
  let component: Lib1Lib4Lib2component10Component;
  let fixture: ComponentFixture<Lib1Lib4Lib2component10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib2component10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib2component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});