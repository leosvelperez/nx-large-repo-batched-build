import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib2component150Component } from './lib2-lib1-lib2component150.component';

describe('Lib2Lib1Lib2component150Component', () => {
  let component: Lib2Lib1Lib2component150Component;
  let fixture: ComponentFixture<Lib2Lib1Lib2component150Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib2component150Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib2component150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
