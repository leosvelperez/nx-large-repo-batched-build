import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2component62Component } from './lib2-lib2component62.component';

describe('Lib2Lib2component62Component', () => {
  let component: Lib2Lib2component62Component;
  let fixture: ComponentFixture<Lib2Lib2component62Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2component62Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2component62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
