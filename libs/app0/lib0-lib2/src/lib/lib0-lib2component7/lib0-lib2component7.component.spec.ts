import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2component7Component } from './lib0-lib2component7.component';

describe('Lib0Lib2component7Component', () => {
  let component: Lib0Lib2component7Component;
  let fixture: ComponentFixture<Lib0Lib2component7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2component7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
