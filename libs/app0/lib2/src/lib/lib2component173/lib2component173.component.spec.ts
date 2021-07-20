import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component173Component } from './lib2component173.component';

describe('Lib2component173Component', () => {
  let component: Lib2component173Component;
  let fixture: ComponentFixture<Lib2component173Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component173Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
