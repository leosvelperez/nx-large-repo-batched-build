import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component50Component } from './lib2component50.component';

describe('Lib2component50Component', () => {
  let component: Lib2component50Component;
  let fixture: ComponentFixture<Lib2component50Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component50Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
