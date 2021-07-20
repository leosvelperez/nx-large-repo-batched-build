import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib0component7Component } from './lib2-lib2-lib0component7.component';

describe('Lib2Lib2Lib0component7Component', () => {
  let component: Lib2Lib2Lib0component7Component;
  let fixture: ComponentFixture<Lib2Lib2Lib0component7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib0component7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib0component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
