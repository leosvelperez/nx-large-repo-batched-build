import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component7Component } from './lib2component7.component';

describe('Lib2component7Component', () => {
  let component: Lib2component7Component;
  let fixture: ComponentFixture<Lib2component7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
