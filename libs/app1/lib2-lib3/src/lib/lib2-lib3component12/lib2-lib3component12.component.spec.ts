import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3component12Component } from './lib2-lib3component12.component';

describe('Lib2Lib3component12Component', () => {
  let component: Lib2Lib3component12Component;
  let fixture: ComponentFixture<Lib2Lib3component12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3component12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});