import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component73Component } from './lib2component73.component';

describe('Lib2component73Component', () => {
  let component: Lib2component73Component;
  let fixture: ComponentFixture<Lib2component73Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component73Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component73Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
