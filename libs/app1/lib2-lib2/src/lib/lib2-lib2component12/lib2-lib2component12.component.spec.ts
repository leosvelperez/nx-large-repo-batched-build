import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2component12Component } from './lib2-lib2component12.component';

describe('Lib2Lib2component12Component', () => {
  let component: Lib2Lib2component12Component;
  let fixture: ComponentFixture<Lib2Lib2component12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2component12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
