import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib0component37Component } from './lib2-lib1-lib0component37.component';

describe('Lib2Lib1Lib0component37Component', () => {
  let component: Lib2Lib1Lib0component37Component;
  let fixture: ComponentFixture<Lib2Lib1Lib0component37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib0component37Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib0component37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
