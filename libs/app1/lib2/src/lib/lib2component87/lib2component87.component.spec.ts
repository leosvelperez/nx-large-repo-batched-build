import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component87Component } from './lib2component87.component';

describe('Lib2component87Component', () => {
  let component: Lib2component87Component;
  let fixture: ComponentFixture<Lib2component87Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component87Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component87Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
