import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib3component72Component } from './lib1-lib4-lib3component72.component';

describe('Lib1Lib4Lib3component72Component', () => {
  let component: Lib1Lib4Lib3component72Component;
  let fixture: ComponentFixture<Lib1Lib4Lib3component72Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib3component72Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib3component72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
