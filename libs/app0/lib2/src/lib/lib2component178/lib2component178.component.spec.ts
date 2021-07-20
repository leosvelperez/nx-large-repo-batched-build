import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component178Component } from './lib2component178.component';

describe('Lib2component178Component', () => {
  let component: Lib2component178Component;
  let fixture: ComponentFixture<Lib2component178Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component178Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
