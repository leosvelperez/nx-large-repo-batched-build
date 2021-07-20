import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0component143Component } from './lib2-lib0component143.component';

describe('Lib2Lib0component143Component', () => {
  let component: Lib2Lib0component143Component;
  let fixture: ComponentFixture<Lib2Lib0component143Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0component143Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0component143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
