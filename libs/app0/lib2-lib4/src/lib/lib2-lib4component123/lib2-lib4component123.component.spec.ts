import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4component123Component } from './lib2-lib4component123.component';

describe('Lib2Lib4component123Component', () => {
  let component: Lib2Lib4component123Component;
  let fixture: ComponentFixture<Lib2Lib4component123Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4component123Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4component123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});