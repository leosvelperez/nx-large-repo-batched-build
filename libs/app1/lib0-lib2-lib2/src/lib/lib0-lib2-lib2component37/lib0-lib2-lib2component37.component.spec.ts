import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib2component37Component } from './lib0-lib2-lib2component37.component';

describe('Lib0Lib2Lib2component37Component', () => {
  let component: Lib0Lib2Lib2component37Component;
  let fixture: ComponentFixture<Lib0Lib2Lib2component37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib2component37Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib2component37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});