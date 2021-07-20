import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib0component63Component } from './lib2-lib1-lib0component63.component';

describe('Lib2Lib1Lib0component63Component', () => {
  let component: Lib2Lib1Lib0component63Component;
  let fixture: ComponentFixture<Lib2Lib1Lib0component63Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib0component63Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib0component63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
