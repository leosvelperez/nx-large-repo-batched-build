import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component139Component } from './lib2component139.component';

describe('Lib2component139Component', () => {
  let component: Lib2component139Component;
  let fixture: ComponentFixture<Lib2component139Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component139Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
