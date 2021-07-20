import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0component190Component } from './lib2-lib0component190.component';

describe('Lib2Lib0component190Component', () => {
  let component: Lib2Lib0component190Component;
  let fixture: ComponentFixture<Lib2Lib0component190Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0component190Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0component190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
