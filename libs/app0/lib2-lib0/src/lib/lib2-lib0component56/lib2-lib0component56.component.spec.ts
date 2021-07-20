import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0component56Component } from './lib2-lib0component56.component';

describe('Lib2Lib0component56Component', () => {
  let component: Lib2Lib0component56Component;
  let fixture: ComponentFixture<Lib2Lib0component56Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0component56Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0component56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
