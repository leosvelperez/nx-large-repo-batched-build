import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib3component127Component } from './lib1-lib0-lib3component127.component';

describe('Lib1Lib0Lib3component127Component', () => {
  let component: Lib1Lib0Lib3component127Component;
  let fixture: ComponentFixture<Lib1Lib0Lib3component127Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib3component127Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib3component127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
