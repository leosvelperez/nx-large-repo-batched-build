import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib2component37Component } from './lib2-lib3-lib2component37.component';

describe('Lib2Lib3Lib2component37Component', () => {
  let component: Lib2Lib3Lib2component37Component;
  let fixture: ComponentFixture<Lib2Lib3Lib2component37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib2component37Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib2component37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});