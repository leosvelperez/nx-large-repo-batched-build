import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib0component4Component } from './lib2-lib4-lib0component4.component';

describe('Lib2Lib4Lib0component4Component', () => {
  let component: Lib2Lib4Lib0component4Component;
  let fixture: ComponentFixture<Lib2Lib4Lib0component4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib0component4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib0component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
