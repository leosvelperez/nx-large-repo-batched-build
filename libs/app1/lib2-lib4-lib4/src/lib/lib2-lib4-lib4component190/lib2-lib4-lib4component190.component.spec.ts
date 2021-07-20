import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib4component190Component } from './lib2-lib4-lib4component190.component';

describe('Lib2Lib4Lib4component190Component', () => {
  let component: Lib2Lib4Lib4component190Component;
  let fixture: ComponentFixture<Lib2Lib4Lib4component190Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib4component190Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib4component190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
