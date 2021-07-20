import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib3component55Component } from './lib2-lib3-lib3component55.component';

describe('Lib2Lib3Lib3component55Component', () => {
  let component: Lib2Lib3Lib3component55Component;
  let fixture: ComponentFixture<Lib2Lib3Lib3component55Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib3component55Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib3component55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
