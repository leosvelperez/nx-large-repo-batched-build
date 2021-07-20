import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib2component88Component } from './lib2-lib1-lib2component88.component';

describe('Lib2Lib1Lib2component88Component', () => {
  let component: Lib2Lib1Lib2component88Component;
  let fixture: ComponentFixture<Lib2Lib1Lib2component88Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib2component88Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib2component88Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
