import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib1component123Component } from './lib2-lib0-lib1component123.component';

describe('Lib2Lib0Lib1component123Component', () => {
  let component: Lib2Lib0Lib1component123Component;
  let fixture: ComponentFixture<Lib2Lib0Lib1component123Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib1component123Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib1component123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
