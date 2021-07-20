import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib2component99Component } from './lib1-lib2-lib2component99.component';

describe('Lib1Lib2Lib2component99Component', () => {
  let component: Lib1Lib2Lib2component99Component;
  let fixture: ComponentFixture<Lib1Lib2Lib2component99Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib2component99Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib2component99Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
