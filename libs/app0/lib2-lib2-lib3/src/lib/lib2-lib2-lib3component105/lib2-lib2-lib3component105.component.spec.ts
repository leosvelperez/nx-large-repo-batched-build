import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib3component105Component } from './lib2-lib2-lib3component105.component';

describe('Lib2Lib2Lib3component105Component', () => {
  let component: Lib2Lib2Lib3component105Component;
  let fixture: ComponentFixture<Lib2Lib2Lib3component105Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib3component105Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib3component105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
