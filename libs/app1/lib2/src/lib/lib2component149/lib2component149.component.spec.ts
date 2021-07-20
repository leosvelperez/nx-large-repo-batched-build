import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component149Component } from './lib2component149.component';

describe('Lib2component149Component', () => {
  let component: Lib2component149Component;
  let fixture: ComponentFixture<Lib2component149Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component149Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
