import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib4component23Component } from './lib1-lib1-lib4component23.component';

describe('Lib1Lib1Lib4component23Component', () => {
  let component: Lib1Lib1Lib4component23Component;
  let fixture: ComponentFixture<Lib1Lib1Lib4component23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib4component23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib4component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
