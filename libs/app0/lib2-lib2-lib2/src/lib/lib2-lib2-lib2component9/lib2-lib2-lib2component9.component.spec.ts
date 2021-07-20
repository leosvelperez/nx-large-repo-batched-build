import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib2component9Component } from './lib2-lib2-lib2component9.component';

describe('Lib2Lib2Lib2component9Component', () => {
  let component: Lib2Lib2Lib2component9Component;
  let fixture: ComponentFixture<Lib2Lib2Lib2component9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib2component9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib2component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
