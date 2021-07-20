import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib2component58Component } from './lib2-lib3-lib2component58.component';

describe('Lib2Lib3Lib2component58Component', () => {
  let component: Lib2Lib3Lib2component58Component;
  let fixture: ComponentFixture<Lib2Lib3Lib2component58Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib2component58Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib2component58Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
