import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component132Component } from './lib2component132.component';

describe('Lib2component132Component', () => {
  let component: Lib2component132Component;
  let fixture: ComponentFixture<Lib2component132Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component132Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
