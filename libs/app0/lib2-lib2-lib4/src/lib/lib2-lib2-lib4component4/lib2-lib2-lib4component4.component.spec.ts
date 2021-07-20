import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib4component4Component } from './lib2-lib2-lib4component4.component';

describe('Lib2Lib2Lib4component4Component', () => {
  let component: Lib2Lib2Lib4component4Component;
  let fixture: ComponentFixture<Lib2Lib2Lib4component4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib4component4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib4component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
