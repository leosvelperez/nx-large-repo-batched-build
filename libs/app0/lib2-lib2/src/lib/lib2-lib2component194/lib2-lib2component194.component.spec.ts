import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2component194Component } from './lib2-lib2component194.component';

describe('Lib2Lib2component194Component', () => {
  let component: Lib2Lib2component194Component;
  let fixture: ComponentFixture<Lib2Lib2component194Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2component194Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2component194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});