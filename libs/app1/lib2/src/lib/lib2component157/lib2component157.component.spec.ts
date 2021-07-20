import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component157Component } from './lib2component157.component';

describe('Lib2component157Component', () => {
  let component: Lib2component157Component;
  let fixture: ComponentFixture<Lib2component157Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component157Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
