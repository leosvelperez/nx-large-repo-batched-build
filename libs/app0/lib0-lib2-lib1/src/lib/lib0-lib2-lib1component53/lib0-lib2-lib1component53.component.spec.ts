import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib1component53Component } from './lib0-lib2-lib1component53.component';

describe('Lib0Lib2Lib1component53Component', () => {
  let component: Lib0Lib2Lib1component53Component;
  let fixture: ComponentFixture<Lib0Lib2Lib1component53Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib1component53Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib1component53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
