import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib3component134Component } from './lib2-lib4-lib3component134.component';

describe('Lib2Lib4Lib3component134Component', () => {
  let component: Lib2Lib4Lib3component134Component;
  let fixture: ComponentFixture<Lib2Lib4Lib3component134Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib3component134Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib3component134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
