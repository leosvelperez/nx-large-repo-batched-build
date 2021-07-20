import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2component173Component } from './lib0-lib2component173.component';

describe('Lib0Lib2component173Component', () => {
  let component: Lib0Lib2component173Component;
  let fixture: ComponentFixture<Lib0Lib2component173Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2component173Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2component173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
