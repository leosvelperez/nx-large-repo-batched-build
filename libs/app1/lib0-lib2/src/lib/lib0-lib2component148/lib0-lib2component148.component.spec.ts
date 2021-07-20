import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2component148Component } from './lib0-lib2component148.component';

describe('Lib0Lib2component148Component', () => {
  let component: Lib0Lib2component148Component;
  let fixture: ComponentFixture<Lib0Lib2component148Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2component148Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2component148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
