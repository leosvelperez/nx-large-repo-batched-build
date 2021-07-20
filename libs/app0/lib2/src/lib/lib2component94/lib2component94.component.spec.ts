import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component94Component } from './lib2component94.component';

describe('Lib2component94Component', () => {
  let component: Lib2component94Component;
  let fixture: ComponentFixture<Lib2component94Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component94Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component94Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
