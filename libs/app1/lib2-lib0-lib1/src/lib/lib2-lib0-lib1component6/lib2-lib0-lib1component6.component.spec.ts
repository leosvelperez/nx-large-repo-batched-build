import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib1component6Component } from './lib2-lib0-lib1component6.component';

describe('Lib2Lib0Lib1component6Component', () => {
  let component: Lib2Lib0Lib1component6Component;
  let fixture: ComponentFixture<Lib2Lib0Lib1component6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib1component6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib1component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
