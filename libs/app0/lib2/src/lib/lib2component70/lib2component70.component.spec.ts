import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component70Component } from './lib2component70.component';

describe('Lib2component70Component', () => {
  let component: Lib2component70Component;
  let fixture: ComponentFixture<Lib2component70Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component70Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
