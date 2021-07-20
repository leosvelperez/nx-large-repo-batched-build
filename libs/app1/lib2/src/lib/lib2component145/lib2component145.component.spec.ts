import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component145Component } from './lib2component145.component';

describe('Lib2component145Component', () => {
  let component: Lib2component145Component;
  let fixture: ComponentFixture<Lib2component145Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component145Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
