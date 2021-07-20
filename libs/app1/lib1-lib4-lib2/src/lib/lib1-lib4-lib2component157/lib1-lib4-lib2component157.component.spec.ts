import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib2component157Component } from './lib1-lib4-lib2component157.component';

describe('Lib1Lib4Lib2component157Component', () => {
  let component: Lib1Lib4Lib2component157Component;
  let fixture: ComponentFixture<Lib1Lib4Lib2component157Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib2component157Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib2component157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
