import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component185Component } from './lib2component185.component';

describe('Lib2component185Component', () => {
  let component: Lib2component185Component;
  let fixture: ComponentFixture<Lib2component185Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component185Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
