import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2component128Component } from './lib0-lib2component128.component';

describe('Lib0Lib2component128Component', () => {
  let component: Lib0Lib2component128Component;
  let fixture: ComponentFixture<Lib0Lib2component128Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2component128Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2component128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
