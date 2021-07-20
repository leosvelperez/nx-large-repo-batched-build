import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component179Component } from './lib2component179.component';

describe('Lib2component179Component', () => {
  let component: Lib2component179Component;
  let fixture: ComponentFixture<Lib2component179Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component179Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
