import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component99Component } from './lib2component99.component';

describe('Lib2component99Component', () => {
  let component: Lib2component99Component;
  let fixture: ComponentFixture<Lib2component99Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component99Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component99Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
