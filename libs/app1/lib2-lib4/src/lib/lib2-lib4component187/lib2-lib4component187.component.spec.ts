import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4component187Component } from './lib2-lib4component187.component';

describe('Lib2Lib4component187Component', () => {
  let component: Lib2Lib4component187Component;
  let fixture: ComponentFixture<Lib2Lib4component187Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4component187Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4component187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
