import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib0component112Component } from './lib2-lib4-lib0component112.component';

describe('Lib2Lib4Lib0component112Component', () => {
  let component: Lib2Lib4Lib0component112Component;
  let fixture: ComponentFixture<Lib2Lib4Lib0component112Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib0component112Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib0component112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
