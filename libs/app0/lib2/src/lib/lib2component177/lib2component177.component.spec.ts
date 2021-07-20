import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component177Component } from './lib2component177.component';

describe('Lib2component177Component', () => {
  let component: Lib2component177Component;
  let fixture: ComponentFixture<Lib2component177Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component177Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
