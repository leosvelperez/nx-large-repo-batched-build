import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib2component41Component } from './lib1-lib3-lib2component41.component';

describe('Lib1Lib3Lib2component41Component', () => {
  let component: Lib1Lib3Lib2component41Component;
  let fixture: ComponentFixture<Lib1Lib3Lib2component41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib2component41Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib2component41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});