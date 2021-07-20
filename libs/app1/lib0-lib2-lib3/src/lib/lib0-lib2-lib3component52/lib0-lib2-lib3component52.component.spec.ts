import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib3component52Component } from './lib0-lib2-lib3component52.component';

describe('Lib0Lib2Lib3component52Component', () => {
  let component: Lib0Lib2Lib3component52Component;
  let fixture: ComponentFixture<Lib0Lib2Lib3component52Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib3component52Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib3component52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
