import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib3component3Component } from './lib2-lib4-lib3component3.component';

describe('Lib2Lib4Lib3component3Component', () => {
  let component: Lib2Lib4Lib3component3Component;
  let fixture: ComponentFixture<Lib2Lib4Lib3component3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib3component3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib3component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});