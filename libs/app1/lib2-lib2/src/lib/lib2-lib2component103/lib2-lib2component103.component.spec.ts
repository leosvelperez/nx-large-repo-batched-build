import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2component103Component } from './lib2-lib2component103.component';

describe('Lib2Lib2component103Component', () => {
  let component: Lib2Lib2component103Component;
  let fixture: ComponentFixture<Lib2Lib2component103Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2component103Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2component103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
