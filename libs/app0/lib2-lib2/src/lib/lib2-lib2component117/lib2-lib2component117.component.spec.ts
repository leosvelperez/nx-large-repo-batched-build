import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2component117Component } from './lib2-lib2component117.component';

describe('Lib2Lib2component117Component', () => {
  let component: Lib2Lib2component117Component;
  let fixture: ComponentFixture<Lib2Lib2component117Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2component117Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2component117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
