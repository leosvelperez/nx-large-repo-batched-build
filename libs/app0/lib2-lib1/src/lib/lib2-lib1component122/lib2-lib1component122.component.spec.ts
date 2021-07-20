import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1component122Component } from './lib2-lib1component122.component';

describe('Lib2Lib1component122Component', () => {
  let component: Lib2Lib1component122Component;
  let fixture: ComponentFixture<Lib2Lib1component122Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1component122Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1component122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
