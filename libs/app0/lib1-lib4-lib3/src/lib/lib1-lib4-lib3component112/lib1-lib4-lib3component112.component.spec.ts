import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib3component112Component } from './lib1-lib4-lib3component112.component';

describe('Lib1Lib4Lib3component112Component', () => {
  let component: Lib1Lib4Lib3component112Component;
  let fixture: ComponentFixture<Lib1Lib4Lib3component112Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib3component112Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib3component112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
