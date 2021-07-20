import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib4component198Component } from './lib2-lib3-lib4component198.component';

describe('Lib2Lib3Lib4component198Component', () => {
  let component: Lib2Lib3Lib4component198Component;
  let fixture: ComponentFixture<Lib2Lib3Lib4component198Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib4component198Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib4component198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
