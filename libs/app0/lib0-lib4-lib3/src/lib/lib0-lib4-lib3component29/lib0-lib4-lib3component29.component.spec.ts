import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4Lib3component29Component } from './lib0-lib4-lib3component29.component';

describe('Lib0Lib4Lib3component29Component', () => {
  let component: Lib0Lib4Lib3component29Component;
  let fixture: ComponentFixture<Lib0Lib4Lib3component29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4Lib3component29Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4Lib3component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});