import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib1component162Component } from './lib2-lib3-lib1component162.component';

describe('Lib2Lib3Lib1component162Component', () => {
  let component: Lib2Lib3Lib1component162Component;
  let fixture: ComponentFixture<Lib2Lib3Lib1component162Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib1component162Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib1component162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
