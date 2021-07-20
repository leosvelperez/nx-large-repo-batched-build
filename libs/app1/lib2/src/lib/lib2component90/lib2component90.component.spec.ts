import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component90Component } from './lib2component90.component';

describe('Lib2component90Component', () => {
  let component: Lib2component90Component;
  let fixture: ComponentFixture<Lib2component90Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component90Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
