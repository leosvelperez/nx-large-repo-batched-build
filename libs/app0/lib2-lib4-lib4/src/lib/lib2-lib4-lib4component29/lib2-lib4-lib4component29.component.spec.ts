import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib4component29Component } from './lib2-lib4-lib4component29.component';

describe('Lib2Lib4Lib4component29Component', () => {
  let component: Lib2Lib4Lib4component29Component;
  let fixture: ComponentFixture<Lib2Lib4Lib4component29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib4component29Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib4component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});