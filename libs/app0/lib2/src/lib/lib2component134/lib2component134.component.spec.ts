import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component134Component } from './lib2component134.component';

describe('Lib2component134Component', () => {
  let component: Lib2component134Component;
  let fixture: ComponentFixture<Lib2component134Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component134Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
