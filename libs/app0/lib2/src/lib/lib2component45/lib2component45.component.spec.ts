import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component45Component } from './lib2component45.component';

describe('Lib2component45Component', () => {
  let component: Lib2component45Component;
  let fixture: ComponentFixture<Lib2component45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component45Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
