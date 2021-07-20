import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib3component121Component } from './lib1-lib4-lib3component121.component';

describe('Lib1Lib4Lib3component121Component', () => {
  let component: Lib1Lib4Lib3component121Component;
  let fixture: ComponentFixture<Lib1Lib4Lib3component121Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib3component121Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib3component121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
