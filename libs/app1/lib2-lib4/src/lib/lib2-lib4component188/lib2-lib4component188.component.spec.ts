import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4component188Component } from './lib2-lib4component188.component';

describe('Lib2Lib4component188Component', () => {
  let component: Lib2Lib4component188Component;
  let fixture: ComponentFixture<Lib2Lib4component188Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4component188Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4component188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
