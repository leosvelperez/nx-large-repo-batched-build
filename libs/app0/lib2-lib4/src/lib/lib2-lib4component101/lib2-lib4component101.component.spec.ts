import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4component101Component } from './lib2-lib4component101.component';

describe('Lib2Lib4component101Component', () => {
  let component: Lib2Lib4component101Component;
  let fixture: ComponentFixture<Lib2Lib4component101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4component101Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4component101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
