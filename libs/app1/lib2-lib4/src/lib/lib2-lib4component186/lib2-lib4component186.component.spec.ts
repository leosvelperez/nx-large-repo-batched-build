import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4component186Component } from './lib2-lib4component186.component';

describe('Lib2Lib4component186Component', () => {
  let component: Lib2Lib4component186Component;
  let fixture: ComponentFixture<Lib2Lib4component186Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4component186Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4component186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
