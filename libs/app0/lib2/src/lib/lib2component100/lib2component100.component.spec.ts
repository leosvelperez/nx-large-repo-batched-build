import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component100Component } from './lib2component100.component';

describe('Lib2component100Component', () => {
  let component: Lib2component100Component;
  let fixture: ComponentFixture<Lib2component100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component100Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
