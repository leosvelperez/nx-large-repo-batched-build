import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component169Component } from './lib2component169.component';

describe('Lib2component169Component', () => {
  let component: Lib2component169Component;
  let fixture: ComponentFixture<Lib2component169Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component169Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
