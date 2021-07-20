import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib4component72Component } from './lib1-lib2-lib4component72.component';

describe('Lib1Lib2Lib4component72Component', () => {
  let component: Lib1Lib2Lib4component72Component;
  let fixture: ComponentFixture<Lib1Lib2Lib4component72Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib4component72Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib4component72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
