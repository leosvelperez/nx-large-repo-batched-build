import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component53Component } from './lib2component53.component';

describe('Lib2component53Component', () => {
  let component: Lib2component53Component;
  let fixture: ComponentFixture<Lib2component53Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component53Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
