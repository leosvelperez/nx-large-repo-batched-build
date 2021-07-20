import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3component42Component } from './lib2-lib3component42.component';

describe('Lib2Lib3component42Component', () => {
  let component: Lib2Lib3component42Component;
  let fixture: ComponentFixture<Lib2Lib3component42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3component42Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
