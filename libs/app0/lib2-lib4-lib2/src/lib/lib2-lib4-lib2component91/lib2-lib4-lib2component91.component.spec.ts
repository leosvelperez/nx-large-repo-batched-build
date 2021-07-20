import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib2component91Component } from './lib2-lib4-lib2component91.component';

describe('Lib2Lib4Lib2component91Component', () => {
  let component: Lib2Lib4Lib2component91Component;
  let fixture: ComponentFixture<Lib2Lib4Lib2component91Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib2component91Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib2component91Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
