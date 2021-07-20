import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3component134Component } from './lib1-lib3component134.component';

describe('Lib1Lib3component134Component', () => {
  let component: Lib1Lib3component134Component;
  let fixture: ComponentFixture<Lib1Lib3component134Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3component134Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3component134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
