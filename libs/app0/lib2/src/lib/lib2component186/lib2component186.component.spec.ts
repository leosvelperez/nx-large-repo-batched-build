import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component186Component } from './lib2component186.component';

describe('Lib2component186Component', () => {
  let component: Lib2component186Component;
  let fixture: ComponentFixture<Lib2component186Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component186Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
