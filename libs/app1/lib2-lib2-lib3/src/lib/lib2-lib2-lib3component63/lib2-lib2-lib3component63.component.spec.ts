import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib3component63Component } from './lib2-lib2-lib3component63.component';

describe('Lib2Lib2Lib3component63Component', () => {
  let component: Lib2Lib2Lib3component63Component;
  let fixture: ComponentFixture<Lib2Lib2Lib3component63Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib3component63Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib3component63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});