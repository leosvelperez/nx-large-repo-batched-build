import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib0component6Component } from './lib0-lib3-lib0component6.component';

describe('Lib0Lib3Lib0component6Component', () => {
  let component: Lib0Lib3Lib0component6Component;
  let fixture: ComponentFixture<Lib0Lib3Lib0component6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib0component6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib0component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
