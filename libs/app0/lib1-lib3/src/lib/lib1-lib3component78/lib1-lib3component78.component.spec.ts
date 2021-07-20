import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3component78Component } from './lib1-lib3component78.component';

describe('Lib1Lib3component78Component', () => {
  let component: Lib1Lib3component78Component;
  let fixture: ComponentFixture<Lib1Lib3component78Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3component78Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3component78Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
