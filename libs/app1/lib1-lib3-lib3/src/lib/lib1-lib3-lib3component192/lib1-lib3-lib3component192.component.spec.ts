import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib3component192Component } from './lib1-lib3-lib3component192.component';

describe('Lib1Lib3Lib3component192Component', () => {
  let component: Lib1Lib3Lib3component192Component;
  let fixture: ComponentFixture<Lib1Lib3Lib3component192Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib3component192Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib3component192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
