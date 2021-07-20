import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib3component8Component } from './lib1-lib1-lib3component8.component';

describe('Lib1Lib1Lib3component8Component', () => {
  let component: Lib1Lib1Lib3component8Component;
  let fixture: ComponentFixture<Lib1Lib1Lib3component8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib3component8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib3component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
