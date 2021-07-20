import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4component138Component } from './lib2-lib4component138.component';

describe('Lib2Lib4component138Component', () => {
  let component: Lib2Lib4component138Component;
  let fixture: ComponentFixture<Lib2Lib4component138Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4component138Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4component138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
