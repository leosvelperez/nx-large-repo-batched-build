import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2component140Component } from './lib2-lib2component140.component';

describe('Lib2Lib2component140Component', () => {
  let component: Lib2Lib2component140Component;
  let fixture: ComponentFixture<Lib2Lib2component140Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2component140Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2component140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
