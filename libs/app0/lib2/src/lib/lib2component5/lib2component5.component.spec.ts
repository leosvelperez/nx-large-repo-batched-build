import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component5Component } from './lib2component5.component';

describe('Lib2component5Component', () => {
  let component: Lib2component5Component;
  let fixture: ComponentFixture<Lib2component5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
