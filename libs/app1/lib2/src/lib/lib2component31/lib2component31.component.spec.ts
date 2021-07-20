import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component31Component } from './lib2component31.component';

describe('Lib2component31Component', () => {
  let component: Lib2component31Component;
  let fixture: ComponentFixture<Lib2component31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component31Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
