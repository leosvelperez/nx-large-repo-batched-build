import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib4component66Component } from './lib0-lib3-lib4component66.component';

describe('Lib0Lib3Lib4component66Component', () => {
  let component: Lib0Lib3Lib4component66Component;
  let fixture: ComponentFixture<Lib0Lib3Lib4component66Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib4component66Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib4component66Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
