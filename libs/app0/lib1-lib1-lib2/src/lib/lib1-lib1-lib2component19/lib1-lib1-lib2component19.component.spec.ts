import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib2component19Component } from './lib1-lib1-lib2component19.component';

describe('Lib1Lib1Lib2component19Component', () => {
  let component: Lib1Lib1Lib2component19Component;
  let fixture: ComponentFixture<Lib1Lib1Lib2component19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib2component19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib2component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
