import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3Lib3component135Component } from './lib0-lib3-lib3component135.component';

describe('Lib0Lib3Lib3component135Component', () => {
  let component: Lib0Lib3Lib3component135Component;
  let fixture: ComponentFixture<Lib0Lib3Lib3component135Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3Lib3component135Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3Lib3component135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
