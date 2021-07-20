import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib0component25Component } from './lib2-lib0-lib0component25.component';

describe('Lib2Lib0Lib0component25Component', () => {
  let component: Lib2Lib0Lib0component25Component;
  let fixture: ComponentFixture<Lib2Lib0Lib0component25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib0component25Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib0component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
