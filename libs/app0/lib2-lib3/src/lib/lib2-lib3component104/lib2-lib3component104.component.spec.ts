import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3component104Component } from './lib2-lib3component104.component';

describe('Lib2Lib3component104Component', () => {
  let component: Lib2Lib3component104Component;
  let fixture: ComponentFixture<Lib2Lib3component104Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3component104Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3component104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
