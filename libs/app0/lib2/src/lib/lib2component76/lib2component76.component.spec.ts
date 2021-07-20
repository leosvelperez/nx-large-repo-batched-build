import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component76Component } from './lib2component76.component';

describe('Lib2component76Component', () => {
  let component: Lib2component76Component;
  let fixture: ComponentFixture<Lib2component76Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component76Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component76Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
