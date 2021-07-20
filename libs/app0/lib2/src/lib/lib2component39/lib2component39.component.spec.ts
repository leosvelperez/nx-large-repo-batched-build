import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component39Component } from './lib2component39.component';

describe('Lib2component39Component', () => {
  let component: Lib2component39Component;
  let fixture: ComponentFixture<Lib2component39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component39Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
