import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0component111Component } from './lib2-lib0component111.component';

describe('Lib2Lib0component111Component', () => {
  let component: Lib2Lib0component111Component;
  let fixture: ComponentFixture<Lib2Lib0component111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0component111Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0component111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
