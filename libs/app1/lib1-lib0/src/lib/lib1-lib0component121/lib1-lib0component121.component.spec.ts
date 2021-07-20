import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0component121Component } from './lib1-lib0component121.component';

describe('Lib1Lib0component121Component', () => {
  let component: Lib1Lib0component121Component;
  let fixture: ComponentFixture<Lib1Lib0component121Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0component121Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0component121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
