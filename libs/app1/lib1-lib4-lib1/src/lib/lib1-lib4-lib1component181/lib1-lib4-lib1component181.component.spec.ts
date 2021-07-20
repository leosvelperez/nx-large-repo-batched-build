import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib1component181Component } from './lib1-lib4-lib1component181.component';

describe('Lib1Lib4Lib1component181Component', () => {
  let component: Lib1Lib4Lib1component181Component;
  let fixture: ComponentFixture<Lib1Lib4Lib1component181Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib1component181Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib1component181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
