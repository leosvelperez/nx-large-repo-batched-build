import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib0component181Component } from './lib1-lib1-lib0component181.component';

describe('Lib1Lib1Lib0component181Component', () => {
  let component: Lib1Lib1Lib0component181Component;
  let fixture: ComponentFixture<Lib1Lib1Lib0component181Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib0component181Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib0component181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
