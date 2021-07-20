import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib3component176Component } from './lib2-lib4-lib3component176.component';

describe('Lib2Lib4Lib3component176Component', () => {
  let component: Lib2Lib4Lib3component176Component;
  let fixture: ComponentFixture<Lib2Lib4Lib3component176Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib3component176Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib3component176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
