import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib2component129Component } from './lib2-lib3-lib2component129.component';

describe('Lib2Lib3Lib2component129Component', () => {
  let component: Lib2Lib3Lib2component129Component;
  let fixture: ComponentFixture<Lib2Lib3Lib2component129Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib2component129Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib2component129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
