import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib4component72Component } from './lib2-lib3-lib4component72.component';

describe('Lib2Lib3Lib4component72Component', () => {
  let component: Lib2Lib3Lib4component72Component;
  let fixture: ComponentFixture<Lib2Lib3Lib4component72Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib4component72Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib4component72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});