import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib4component86Component } from './lib2-lib1-lib4component86.component';

describe('Lib2Lib1Lib4component86Component', () => {
  let component: Lib2Lib1Lib4component86Component;
  let fixture: ComponentFixture<Lib2Lib1Lib4component86Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib4component86Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib4component86Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
