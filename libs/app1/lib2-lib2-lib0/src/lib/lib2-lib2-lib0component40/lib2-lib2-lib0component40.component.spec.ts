import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib0component40Component } from './lib2-lib2-lib0component40.component';

describe('Lib2Lib2Lib0component40Component', () => {
  let component: Lib2Lib2Lib0component40Component;
  let fixture: ComponentFixture<Lib2Lib2Lib0component40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib0component40Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib0component40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
