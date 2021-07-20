import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib2component157Component } from './lib1-lib1-lib2component157.component';

describe('Lib1Lib1Lib2component157Component', () => {
  let component: Lib1Lib1Lib2component157Component;
  let fixture: ComponentFixture<Lib1Lib1Lib2component157Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib2component157Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib2component157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
