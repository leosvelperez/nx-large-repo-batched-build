import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib3component19Component } from './lib2-lib2-lib3component19.component';

describe('Lib2Lib2Lib3component19Component', () => {
  let component: Lib2Lib2Lib3component19Component;
  let fixture: ComponentFixture<Lib2Lib2Lib3component19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib3component19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib3component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
