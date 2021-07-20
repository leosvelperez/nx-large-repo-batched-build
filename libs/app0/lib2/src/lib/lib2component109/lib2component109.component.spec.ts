import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component109Component } from './lib2component109.component';

describe('Lib2component109Component', () => {
  let component: Lib2component109Component;
  let fixture: ComponentFixture<Lib2component109Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component109Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
