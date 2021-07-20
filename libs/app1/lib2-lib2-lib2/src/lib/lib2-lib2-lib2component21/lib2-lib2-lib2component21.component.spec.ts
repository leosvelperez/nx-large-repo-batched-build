import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2Lib2component21Component } from './lib2-lib2-lib2component21.component';

describe('Lib2Lib2Lib2component21Component', () => {
  let component: Lib2Lib2Lib2component21Component;
  let fixture: ComponentFixture<Lib2Lib2Lib2component21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2Lib2component21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2Lib2component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
