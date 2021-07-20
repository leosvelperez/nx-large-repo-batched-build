import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib4component141Component } from './lib2-lib4-lib4component141.component';

describe('Lib2Lib4Lib4component141Component', () => {
  let component: Lib2Lib4Lib4component141Component;
  let fixture: ComponentFixture<Lib2Lib4Lib4component141Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib4component141Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib4component141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
