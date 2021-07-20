import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3component185Component } from './lib2-lib3component185.component';

describe('Lib2Lib3component185Component', () => {
  let component: Lib2Lib3component185Component;
  let fixture: ComponentFixture<Lib2Lib3component185Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3component185Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3component185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
