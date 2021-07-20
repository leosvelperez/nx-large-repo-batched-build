import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component10Component } from './lib2component10.component';

describe('Lib2component10Component', () => {
  let component: Lib2component10Component;
  let fixture: ComponentFixture<Lib2component10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
