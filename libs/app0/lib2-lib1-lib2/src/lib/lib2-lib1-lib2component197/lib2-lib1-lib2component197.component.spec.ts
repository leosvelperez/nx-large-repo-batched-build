import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib2component197Component } from './lib2-lib1-lib2component197.component';

describe('Lib2Lib1Lib2component197Component', () => {
  let component: Lib2Lib1Lib2component197Component;
  let fixture: ComponentFixture<Lib2Lib1Lib2component197Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib2component197Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib2component197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
