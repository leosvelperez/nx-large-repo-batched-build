import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib4component29Component } from './lib1-lib2-lib4component29.component';

describe('Lib1Lib2Lib4component29Component', () => {
  let component: Lib1Lib2Lib4component29Component;
  let fixture: ComponentFixture<Lib1Lib2Lib4component29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib4component29Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib4component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
