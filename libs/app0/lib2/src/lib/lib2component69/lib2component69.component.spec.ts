import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component69Component } from './lib2component69.component';

describe('Lib2component69Component', () => {
  let component: Lib2component69Component;
  let fixture: ComponentFixture<Lib2component69Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component69Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
