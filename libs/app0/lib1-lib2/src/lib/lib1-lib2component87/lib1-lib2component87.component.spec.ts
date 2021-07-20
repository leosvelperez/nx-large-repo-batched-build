import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2component87Component } from './lib1-lib2component87.component';

describe('Lib1Lib2component87Component', () => {
  let component: Lib1Lib2component87Component;
  let fixture: ComponentFixture<Lib1Lib2component87Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2component87Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2component87Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
