import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib4Lib1component55Component } from './lib1-lib4-lib1component55.component';

describe('Lib1Lib4Lib1component55Component', () => {
  let component: Lib1Lib4Lib1component55Component;
  let fixture: ComponentFixture<Lib1Lib4Lib1component55Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib4Lib1component55Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib4Lib1component55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
