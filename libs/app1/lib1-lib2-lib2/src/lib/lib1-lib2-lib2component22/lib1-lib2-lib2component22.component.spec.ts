import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib2component22Component } from './lib1-lib2-lib2component22.component';

describe('Lib1Lib2Lib2component22Component', () => {
  let component: Lib1Lib2Lib2component22Component;
  let fixture: ComponentFixture<Lib1Lib2Lib2component22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib2component22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib2component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
