import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib3component36Component } from './lib2-lib4-lib3component36.component';

describe('Lib2Lib4Lib3component36Component', () => {
  let component: Lib2Lib4Lib3component36Component;
  let fixture: ComponentFixture<Lib2Lib4Lib3component36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib3component36Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib3component36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
