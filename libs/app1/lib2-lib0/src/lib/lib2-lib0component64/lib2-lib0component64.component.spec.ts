import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0component64Component } from './lib2-lib0component64.component';

describe('Lib2Lib0component64Component', () => {
  let component: Lib2Lib0component64Component;
  let fixture: ComponentFixture<Lib2Lib0component64Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0component64Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0component64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
