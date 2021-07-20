import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4component142Component } from './lib2-lib4component142.component';

describe('Lib2Lib4component142Component', () => {
  let component: Lib2Lib4component142Component;
  let fixture: ComponentFixture<Lib2Lib4component142Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4component142Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4component142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
