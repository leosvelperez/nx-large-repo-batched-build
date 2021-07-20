import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3component188Component } from './lib1-lib3component188.component';

describe('Lib1Lib3component188Component', () => {
  let component: Lib1Lib3component188Component;
  let fixture: ComponentFixture<Lib1Lib3component188Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3component188Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3component188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
