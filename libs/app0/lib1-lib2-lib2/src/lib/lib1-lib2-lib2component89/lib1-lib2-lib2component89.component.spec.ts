import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib2component89Component } from './lib1-lib2-lib2component89.component';

describe('Lib1Lib2Lib2component89Component', () => {
  let component: Lib1Lib2Lib2component89Component;
  let fixture: ComponentFixture<Lib1Lib2Lib2component89Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib2component89Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib2component89Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
