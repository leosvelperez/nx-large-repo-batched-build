import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component126Component } from './lib2component126.component';

describe('Lib2component126Component', () => {
  let component: Lib2component126Component;
  let fixture: ComponentFixture<Lib2component126Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component126Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
