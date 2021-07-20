import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component123Component } from './lib2component123.component';

describe('Lib2component123Component', () => {
  let component: Lib2component123Component;
  let fixture: ComponentFixture<Lib2component123Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component123Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
