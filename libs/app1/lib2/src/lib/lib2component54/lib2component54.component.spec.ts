import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component54Component } from './lib2component54.component';

describe('Lib2component54Component', () => {
  let component: Lib2component54Component;
  let fixture: ComponentFixture<Lib2component54Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component54Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
