import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component144Component } from './lib2component144.component';

describe('Lib2component144Component', () => {
  let component: Lib2component144Component;
  let fixture: ComponentFixture<Lib2component144Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component144Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
