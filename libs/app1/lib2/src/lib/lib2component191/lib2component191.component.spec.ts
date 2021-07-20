import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component191Component } from './lib2component191.component';

describe('Lib2component191Component', () => {
  let component: Lib2component191Component;
  let fixture: ComponentFixture<Lib2component191Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component191Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
