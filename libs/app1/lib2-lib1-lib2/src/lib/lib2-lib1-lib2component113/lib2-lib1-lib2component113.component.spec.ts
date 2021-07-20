import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib2component113Component } from './lib2-lib1-lib2component113.component';

describe('Lib2Lib1Lib2component113Component', () => {
  let component: Lib2Lib1Lib2component113Component;
  let fixture: ComponentFixture<Lib2Lib1Lib2component113Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib2component113Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib2component113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
