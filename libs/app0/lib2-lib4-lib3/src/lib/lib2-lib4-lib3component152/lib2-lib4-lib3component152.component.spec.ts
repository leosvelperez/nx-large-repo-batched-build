import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib3component152Component } from './lib2-lib4-lib3component152.component';

describe('Lib2Lib4Lib3component152Component', () => {
  let component: Lib2Lib4Lib3component152Component;
  let fixture: ComponentFixture<Lib2Lib4Lib3component152Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib3component152Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib3component152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
