import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4component177Component } from './lib2-lib4component177.component';

describe('Lib2Lib4component177Component', () => {
  let component: Lib2Lib4component177Component;
  let fixture: ComponentFixture<Lib2Lib4component177Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4component177Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4component177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});