import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib2component196Component } from './lib2-lib1-lib2component196.component';

describe('Lib2Lib1Lib2component196Component', () => {
  let component: Lib2Lib1Lib2component196Component;
  let fixture: ComponentFixture<Lib2Lib1Lib2component196Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib2component196Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib2component196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
