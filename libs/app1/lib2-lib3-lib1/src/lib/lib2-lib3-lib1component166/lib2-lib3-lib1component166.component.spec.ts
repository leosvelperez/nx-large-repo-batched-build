import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib1component166Component } from './lib2-lib3-lib1component166.component';

describe('Lib2Lib3Lib1component166Component', () => {
  let component: Lib2Lib3Lib1component166Component;
  let fixture: ComponentFixture<Lib2Lib3Lib1component166Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib1component166Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib1component166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});