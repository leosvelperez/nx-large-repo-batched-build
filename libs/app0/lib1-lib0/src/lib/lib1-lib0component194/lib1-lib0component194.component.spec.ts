import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0component194Component } from './lib1-lib0component194.component';

describe('Lib1Lib0component194Component', () => {
  let component: Lib1Lib0component194Component;
  let fixture: ComponentFixture<Lib1Lib0component194Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0component194Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0component194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
