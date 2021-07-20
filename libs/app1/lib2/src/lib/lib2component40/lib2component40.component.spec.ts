import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component40Component } from './lib2component40.component';

describe('Lib2component40Component', () => {
  let component: Lib2component40Component;
  let fixture: ComponentFixture<Lib2component40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component40Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
