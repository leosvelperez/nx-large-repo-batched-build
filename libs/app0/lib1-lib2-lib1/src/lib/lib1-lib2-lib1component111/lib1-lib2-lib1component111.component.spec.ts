import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib1component111Component } from './lib1-lib2-lib1component111.component';

describe('Lib1Lib2Lib1component111Component', () => {
  let component: Lib1Lib2Lib1component111Component;
  let fixture: ComponentFixture<Lib1Lib2Lib1component111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib1component111Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib1component111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
