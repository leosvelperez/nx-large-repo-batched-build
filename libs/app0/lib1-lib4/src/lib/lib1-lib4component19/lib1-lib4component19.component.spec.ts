import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4component19Component } from './lib1-lib4component19.component';

describe('Lib1Lib4component19Component', () => {
  let component: Lib1Lib4component19Component;
  let fixture: ComponentFixture<Lib1Lib4component19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4component19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
