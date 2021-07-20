import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib2component160Component } from './lib2-lib3-lib2component160.component';

describe('Lib2Lib3Lib2component160Component', () => {
  let component: Lib2Lib3Lib2component160Component;
  let fixture: ComponentFixture<Lib2Lib3Lib2component160Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib2component160Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib2component160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
