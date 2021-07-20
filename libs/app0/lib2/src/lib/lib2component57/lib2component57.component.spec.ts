import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component57Component } from './lib2component57.component';

describe('Lib2component57Component', () => {
  let component: Lib2component57Component;
  let fixture: ComponentFixture<Lib2component57Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component57Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component57Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
