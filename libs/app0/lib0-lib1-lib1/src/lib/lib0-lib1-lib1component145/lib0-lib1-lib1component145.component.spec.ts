import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib1component145Component } from './lib0-lib1-lib1component145.component';

describe('Lib0Lib1Lib1component145Component', () => {
  let component: Lib0Lib1Lib1component145Component;
  let fixture: ComponentFixture<Lib0Lib1Lib1component145Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib1component145Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib1component145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
