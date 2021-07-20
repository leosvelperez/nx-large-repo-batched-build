import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component184Component } from './lib2component184.component';

describe('Lib2component184Component', () => {
  let component: Lib2component184Component;
  let fixture: ComponentFixture<Lib2component184Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component184Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
