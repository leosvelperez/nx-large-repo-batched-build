import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component9Component } from './lib2component9.component';

describe('Lib2component9Component', () => {
  let component: Lib2component9Component;
  let fixture: ComponentFixture<Lib2component9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
