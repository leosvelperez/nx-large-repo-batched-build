import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib2component147Component } from './lib1-lib1-lib2component147.component';

describe('Lib1Lib1Lib2component147Component', () => {
  let component: Lib1Lib1Lib2component147Component;
  let fixture: ComponentFixture<Lib1Lib1Lib2component147Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib2component147Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib2component147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});