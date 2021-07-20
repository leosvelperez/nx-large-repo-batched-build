import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib2component100Component } from './lib2-lib4-lib2component100.component';

describe('Lib2Lib4Lib2component100Component', () => {
  let component: Lib2Lib4Lib2component100Component;
  let fixture: ComponentFixture<Lib2Lib4Lib2component100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib2component100Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib2component100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
