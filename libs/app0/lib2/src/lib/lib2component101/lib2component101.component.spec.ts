import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component101Component } from './lib2component101.component';

describe('Lib2component101Component', () => {
  let component: Lib2component101Component;
  let fixture: ComponentFixture<Lib2component101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component101Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
