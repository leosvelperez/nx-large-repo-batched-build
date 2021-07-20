import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3component25Component } from './lib1-lib3component25.component';

describe('Lib1Lib3component25Component', () => {
  let component: Lib1Lib3component25Component;
  let fixture: ComponentFixture<Lib1Lib3component25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3component25Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
