import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component113Component } from './lib2component113.component';

describe('Lib2component113Component', () => {
  let component: Lib2component113Component;
  let fixture: ComponentFixture<Lib2component113Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component113Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
