import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib2component177Component } from './lib2-lib3-lib2component177.component';

describe('Lib2Lib3Lib2component177Component', () => {
  let component: Lib2Lib3Lib2component177Component;
  let fixture: ComponentFixture<Lib2Lib3Lib2component177Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib2component177Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib2component177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
