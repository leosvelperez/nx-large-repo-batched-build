import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib3component86Component } from './lib2-lib2-lib3component86.component';

describe('Lib2Lib2Lib3component86Component', () => {
  let component: Lib2Lib2Lib3component86Component;
  let fixture: ComponentFixture<Lib2Lib2Lib3component86Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib3component86Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib3component86Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
