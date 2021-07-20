import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib0component86Component } from './lib2-lib3-lib0component86.component';

describe('Lib2Lib3Lib0component86Component', () => {
  let component: Lib2Lib3Lib0component86Component;
  let fixture: ComponentFixture<Lib2Lib3Lib0component86Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib0component86Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib0component86Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
