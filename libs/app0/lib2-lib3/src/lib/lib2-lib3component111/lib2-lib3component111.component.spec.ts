import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3component111Component } from './lib2-lib3component111.component';

describe('Lib2Lib3component111Component', () => {
  let component: Lib2Lib3component111Component;
  let fixture: ComponentFixture<Lib2Lib3component111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3component111Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3component111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});