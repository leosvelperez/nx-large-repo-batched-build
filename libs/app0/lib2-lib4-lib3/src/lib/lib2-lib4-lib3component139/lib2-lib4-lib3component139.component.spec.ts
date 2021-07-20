import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib3component139Component } from './lib2-lib4-lib3component139.component';

describe('Lib2Lib4Lib3component139Component', () => {
  let component: Lib2Lib4Lib3component139Component;
  let fixture: ComponentFixture<Lib2Lib4Lib3component139Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib3component139Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib3component139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
