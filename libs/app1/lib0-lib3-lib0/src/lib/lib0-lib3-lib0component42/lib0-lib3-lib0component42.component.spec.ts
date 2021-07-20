import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib0component42Component } from './lib0-lib3-lib0component42.component';

describe('Lib0Lib3Lib0component42Component', () => {
  let component: Lib0Lib3Lib0component42Component;
  let fixture: ComponentFixture<Lib0Lib3Lib0component42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib0component42Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib0component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
