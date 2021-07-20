import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component12Component } from './lib2component12.component';

describe('Lib2component12Component', () => {
  let component: Lib2component12Component;
  let fixture: ComponentFixture<Lib2component12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
