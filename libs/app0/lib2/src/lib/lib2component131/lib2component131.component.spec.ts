import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component131Component } from './lib2component131.component';

describe('Lib2component131Component', () => {
  let component: Lib2component131Component;
  let fixture: ComponentFixture<Lib2component131Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component131Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
