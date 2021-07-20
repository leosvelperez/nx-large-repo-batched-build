import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component155Component } from './lib2component155.component';

describe('Lib2component155Component', () => {
  let component: Lib2component155Component;
  let fixture: ComponentFixture<Lib2component155Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component155Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
