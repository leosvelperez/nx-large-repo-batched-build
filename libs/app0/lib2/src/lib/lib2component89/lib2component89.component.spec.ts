import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component89Component } from './lib2component89.component';

describe('Lib2component89Component', () => {
  let component: Lib2component89Component;
  let fixture: ComponentFixture<Lib2component89Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component89Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component89Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
