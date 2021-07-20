import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib2component14Component } from './lib2-lib3-lib2component14.component';

describe('Lib2Lib3Lib2component14Component', () => {
  let component: Lib2Lib3Lib2component14Component;
  let fixture: ComponentFixture<Lib2Lib3Lib2component14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib2component14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib2component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
