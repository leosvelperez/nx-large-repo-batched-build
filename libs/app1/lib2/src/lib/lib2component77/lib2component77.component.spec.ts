import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component77Component } from './lib2component77.component';

describe('Lib2component77Component', () => {
  let component: Lib2component77Component;
  let fixture: ComponentFixture<Lib2component77Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component77Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component77Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
