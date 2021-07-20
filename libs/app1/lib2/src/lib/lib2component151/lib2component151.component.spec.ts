import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component151Component } from './lib2component151.component';

describe('Lib2component151Component', () => {
  let component: Lib2component151Component;
  let fixture: ComponentFixture<Lib2component151Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component151Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
