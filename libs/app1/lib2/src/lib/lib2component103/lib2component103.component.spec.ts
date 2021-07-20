import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component103Component } from './lib2component103.component';

describe('Lib2component103Component', () => {
  let component: Lib2component103Component;
  let fixture: ComponentFixture<Lib2component103Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component103Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
