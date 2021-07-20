import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib0component75Component } from './lib2-lib4-lib0component75.component';

describe('Lib2Lib4Lib0component75Component', () => {
  let component: Lib2Lib4Lib0component75Component;
  let fixture: ComponentFixture<Lib2Lib4Lib0component75Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib0component75Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib0component75Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
