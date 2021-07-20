import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0component147Component } from './lib1-lib0component147.component';

describe('Lib1Lib0component147Component', () => {
  let component: Lib1Lib0component147Component;
  let fixture: ComponentFixture<Lib1Lib0component147Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0component147Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0component147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
