import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component6Component } from './lib2component6.component';

describe('Lib2component6Component', () => {
  let component: Lib2component6Component;
  let fixture: ComponentFixture<Lib2component6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
