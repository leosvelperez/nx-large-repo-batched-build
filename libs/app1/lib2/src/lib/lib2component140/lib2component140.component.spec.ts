import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component140Component } from './lib2component140.component';

describe('Lib2component140Component', () => {
  let component: Lib2component140Component;
  let fixture: ComponentFixture<Lib2component140Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component140Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
