import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib0component42Component } from './lib2-lib0-lib0component42.component';

describe('Lib2Lib0Lib0component42Component', () => {
  let component: Lib2Lib0Lib0component42Component;
  let fixture: ComponentFixture<Lib2Lib0Lib0component42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib0component42Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib0component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
