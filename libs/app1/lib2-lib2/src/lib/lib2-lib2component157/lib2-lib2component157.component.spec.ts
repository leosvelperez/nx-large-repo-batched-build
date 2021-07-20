import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2component157Component } from './lib2-lib2component157.component';

describe('Lib2Lib2component157Component', () => {
  let component: Lib2Lib2component157Component;
  let fixture: ComponentFixture<Lib2Lib2component157Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2component157Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2component157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
