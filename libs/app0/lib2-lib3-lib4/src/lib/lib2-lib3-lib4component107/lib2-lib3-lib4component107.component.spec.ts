import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib4component107Component } from './lib2-lib3-lib4component107.component';

describe('Lib2Lib3Lib4component107Component', () => {
  let component: Lib2Lib3Lib4component107Component;
  let fixture: ComponentFixture<Lib2Lib3Lib4component107Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib4component107Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib4component107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
