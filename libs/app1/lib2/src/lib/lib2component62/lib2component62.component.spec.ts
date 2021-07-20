import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component62Component } from './lib2component62.component';

describe('Lib2component62Component', () => {
  let component: Lib2component62Component;
  let fixture: ComponentFixture<Lib2component62Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component62Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
