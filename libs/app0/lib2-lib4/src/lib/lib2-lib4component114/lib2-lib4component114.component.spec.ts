import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4component114Component } from './lib2-lib4component114.component';

describe('Lib2Lib4component114Component', () => {
  let component: Lib2Lib4component114Component;
  let fixture: ComponentFixture<Lib2Lib4component114Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4component114Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4component114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
