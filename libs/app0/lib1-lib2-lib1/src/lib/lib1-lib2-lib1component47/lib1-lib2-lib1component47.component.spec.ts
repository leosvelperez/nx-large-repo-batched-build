import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib1component47Component } from './lib1-lib2-lib1component47.component';

describe('Lib1Lib2Lib1component47Component', () => {
  let component: Lib1Lib2Lib1component47Component;
  let fixture: ComponentFixture<Lib1Lib2Lib1component47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib1component47Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib1component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
