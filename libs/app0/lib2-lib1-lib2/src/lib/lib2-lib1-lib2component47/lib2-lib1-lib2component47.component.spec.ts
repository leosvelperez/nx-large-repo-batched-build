import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib2component47Component } from './lib2-lib1-lib2component47.component';

describe('Lib2Lib1Lib2component47Component', () => {
  let component: Lib2Lib1Lib2component47Component;
  let fixture: ComponentFixture<Lib2Lib1Lib2component47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib2component47Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib2component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});