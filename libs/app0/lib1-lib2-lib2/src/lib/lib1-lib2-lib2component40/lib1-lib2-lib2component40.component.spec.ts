import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib2component40Component } from './lib1-lib2-lib2component40.component';

describe('Lib1Lib2Lib2component40Component', () => {
  let component: Lib1Lib2Lib2component40Component;
  let fixture: ComponentFixture<Lib1Lib2Lib2component40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib2component40Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib2component40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
