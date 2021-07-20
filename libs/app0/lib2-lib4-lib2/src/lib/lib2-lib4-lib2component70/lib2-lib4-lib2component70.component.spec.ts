import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib2component70Component } from './lib2-lib4-lib2component70.component';

describe('Lib2Lib4Lib2component70Component', () => {
  let component: Lib2Lib4Lib2component70Component;
  let fixture: ComponentFixture<Lib2Lib4Lib2component70Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib2component70Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib2component70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
