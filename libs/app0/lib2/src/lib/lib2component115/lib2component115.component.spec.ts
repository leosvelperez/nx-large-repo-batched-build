import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component115Component } from './lib2component115.component';

describe('Lib2component115Component', () => {
  let component: Lib2component115Component;
  let fixture: ComponentFixture<Lib2component115Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component115Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
