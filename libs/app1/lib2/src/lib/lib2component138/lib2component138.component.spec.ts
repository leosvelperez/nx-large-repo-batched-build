import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component138Component } from './lib2component138.component';

describe('Lib2component138Component', () => {
  let component: Lib2component138Component;
  let fixture: ComponentFixture<Lib2component138Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component138Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
