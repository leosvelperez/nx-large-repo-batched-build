import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib3component165Component } from './lib2-lib4-lib3component165.component';

describe('Lib2Lib4Lib3component165Component', () => {
  let component: Lib2Lib4Lib3component165Component;
  let fixture: ComponentFixture<Lib2Lib4Lib3component165Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib3component165Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib3component165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
