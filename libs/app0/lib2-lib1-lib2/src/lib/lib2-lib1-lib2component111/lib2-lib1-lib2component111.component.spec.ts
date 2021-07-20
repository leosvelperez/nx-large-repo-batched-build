import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib2component111Component } from './lib2-lib1-lib2component111.component';

describe('Lib2Lib1Lib2component111Component', () => {
  let component: Lib2Lib1Lib2component111Component;
  let fixture: ComponentFixture<Lib2Lib1Lib2component111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib2component111Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib2component111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
