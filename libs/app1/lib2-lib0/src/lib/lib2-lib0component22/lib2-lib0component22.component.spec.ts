import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0component22Component } from './lib2-lib0component22.component';

describe('Lib2Lib0component22Component', () => {
  let component: Lib2Lib0component22Component;
  let fixture: ComponentFixture<Lib2Lib0component22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0component22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
