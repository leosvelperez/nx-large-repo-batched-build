import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component147Component } from './lib2component147.component';

describe('Lib2component147Component', () => {
  let component: Lib2component147Component;
  let fixture: ComponentFixture<Lib2component147Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component147Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
