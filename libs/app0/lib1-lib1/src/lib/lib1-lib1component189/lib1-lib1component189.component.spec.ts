import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1component189Component } from './lib1-lib1component189.component';

describe('Lib1Lib1component189Component', () => {
  let component: Lib1Lib1component189Component;
  let fixture: ComponentFixture<Lib1Lib1component189Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1component189Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1component189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
