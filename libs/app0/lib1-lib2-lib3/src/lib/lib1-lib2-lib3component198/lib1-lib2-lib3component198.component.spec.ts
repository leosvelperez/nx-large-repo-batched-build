import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2Lib3component198Component } from './lib1-lib2-lib3component198.component';

describe('Lib1Lib2Lib3component198Component', () => {
  let component: Lib1Lib2Lib3component198Component;
  let fixture: ComponentFixture<Lib1Lib2Lib3component198Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2Lib3component198Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2Lib3component198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});