import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib3component148Component } from './lib2-lib4-lib3component148.component';

describe('Lib2Lib4Lib3component148Component', () => {
  let component: Lib2Lib4Lib3component148Component;
  let fixture: ComponentFixture<Lib2Lib4Lib3component148Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib3component148Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib3component148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
