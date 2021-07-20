import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib2component125Component } from './lib2-lib1-lib2component125.component';

describe('Lib2Lib1Lib2component125Component', () => {
  let component: Lib2Lib1Lib2component125Component;
  let fixture: ComponentFixture<Lib2Lib1Lib2component125Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib2component125Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib2component125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
