import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component60Component } from './lib2component60.component';

describe('Lib2component60Component', () => {
  let component: Lib2component60Component;
  let fixture: ComponentFixture<Lib2component60Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component60Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
