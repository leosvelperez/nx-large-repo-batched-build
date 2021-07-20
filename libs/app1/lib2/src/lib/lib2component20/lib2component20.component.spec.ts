import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component20Component } from './lib2component20.component';

describe('Lib2component20Component', () => {
  let component: Lib2component20Component;
  let fixture: ComponentFixture<Lib2component20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
