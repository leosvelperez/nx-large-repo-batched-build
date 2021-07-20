import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1component191Component } from './lib0-lib1component191.component';

describe('Lib0Lib1component191Component', () => {
  let component: Lib0Lib1component191Component;
  let fixture: ComponentFixture<Lib0Lib1component191Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1component191Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1component191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
