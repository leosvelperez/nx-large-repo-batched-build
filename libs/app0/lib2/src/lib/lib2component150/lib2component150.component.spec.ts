import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component150Component } from './lib2component150.component';

describe('Lib2component150Component', () => {
  let component: Lib2component150Component;
  let fixture: ComponentFixture<Lib2component150Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component150Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
