import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib3Lib1component35Component } from './lib1-lib3-lib1component35.component';

describe('Lib1Lib3Lib1component35Component', () => {
  let component: Lib1Lib3Lib1component35Component;
  let fixture: ComponentFixture<Lib1Lib3Lib1component35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib3Lib1component35Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib3Lib1component35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
