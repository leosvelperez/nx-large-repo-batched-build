import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3component44Component } from './lib2-lib3component44.component';

describe('Lib2Lib3component44Component', () => {
  let component: Lib2Lib3component44Component;
  let fixture: ComponentFixture<Lib2Lib3component44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3component44Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3component44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
