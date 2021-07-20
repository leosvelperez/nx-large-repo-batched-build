import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0component31Component } from './lib2-lib0component31.component';

describe('Lib2Lib0component31Component', () => {
  let component: Lib2Lib0component31Component;
  let fixture: ComponentFixture<Lib2Lib0component31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0component31Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0component31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
