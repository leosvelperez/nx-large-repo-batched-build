import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib2component27Component } from './lib2-lib4-lib2component27.component';

describe('Lib2Lib4Lib2component27Component', () => {
  let component: Lib2Lib4Lib2component27Component;
  let fixture: ComponentFixture<Lib2Lib4Lib2component27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib2component27Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib2component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});