import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component82Component } from './lib2component82.component';

describe('Lib2component82Component', () => {
  let component: Lib2component82Component;
  let fixture: ComponentFixture<Lib2component82Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component82Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
