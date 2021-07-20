import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component47Component } from './lib2component47.component';

describe('Lib2component47Component', () => {
  let component: Lib2component47Component;
  let fixture: ComponentFixture<Lib2component47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component47Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
