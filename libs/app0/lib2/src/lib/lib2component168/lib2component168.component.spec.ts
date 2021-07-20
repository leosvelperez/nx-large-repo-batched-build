import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component168Component } from './lib2component168.component';

describe('Lib2component168Component', () => {
  let component: Lib2component168Component;
  let fixture: ComponentFixture<Lib2component168Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component168Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
