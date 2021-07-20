import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4component112Component } from './lib2-lib4component112.component';

describe('Lib2Lib4component112Component', () => {
  let component: Lib2Lib4component112Component;
  let fixture: ComponentFixture<Lib2Lib4component112Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4component112Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4component112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
