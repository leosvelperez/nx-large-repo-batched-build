import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib4component26Component } from './lib2-lib2-lib4component26.component';

describe('Lib2Lib2Lib4component26Component', () => {
  let component: Lib2Lib2Lib4component26Component;
  let fixture: ComponentFixture<Lib2Lib2Lib4component26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib4component26Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib4component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
