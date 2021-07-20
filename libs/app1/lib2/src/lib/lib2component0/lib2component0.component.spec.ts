import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component0Component } from './lib2component0.component';

describe('Lib2component0Component', () => {
  let component: Lib2component0Component;
  let fixture: ComponentFixture<Lib2component0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
