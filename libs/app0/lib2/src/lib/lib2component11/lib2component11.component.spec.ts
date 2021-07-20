import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component11Component } from './lib2component11.component';

describe('Lib2component11Component', () => {
  let component: Lib2component11Component;
  let fixture: ComponentFixture<Lib2component11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
