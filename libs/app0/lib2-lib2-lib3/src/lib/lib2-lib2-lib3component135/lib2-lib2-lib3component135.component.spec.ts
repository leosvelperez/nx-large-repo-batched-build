import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib3component135Component } from './lib2-lib2-lib3component135.component';

describe('Lib2Lib2Lib3component135Component', () => {
  let component: Lib2Lib2Lib3component135Component;
  let fixture: ComponentFixture<Lib2Lib2Lib3component135Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib3component135Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib3component135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
