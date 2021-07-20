import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib3component78Component } from './lib2-lib3-lib3component78.component';

describe('Lib2Lib3Lib3component78Component', () => {
  let component: Lib2Lib3Lib3component78Component;
  let fixture: ComponentFixture<Lib2Lib3Lib3component78Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib3component78Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib3component78Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
