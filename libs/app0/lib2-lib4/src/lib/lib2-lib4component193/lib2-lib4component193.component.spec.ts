import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4component193Component } from './lib2-lib4component193.component';

describe('Lib2Lib4component193Component', () => {
  let component: Lib2Lib4component193Component;
  let fixture: ComponentFixture<Lib2Lib4component193Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4component193Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4component193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});