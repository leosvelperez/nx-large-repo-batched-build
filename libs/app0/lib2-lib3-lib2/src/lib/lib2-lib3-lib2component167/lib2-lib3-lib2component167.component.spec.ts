import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib2component167Component } from './lib2-lib3-lib2component167.component';

describe('Lib2Lib3Lib2component167Component', () => {
  let component: Lib2Lib3Lib2component167Component;
  let fixture: ComponentFixture<Lib2Lib3Lib2component167Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib2component167Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib2component167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
