import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component48Component } from './lib2component48.component';

describe('Lib2component48Component', () => {
  let component: Lib2component48Component;
  let fixture: ComponentFixture<Lib2component48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component48Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
