import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib0component133Component } from './lib2-lib3-lib0component133.component';

describe('Lib2Lib3Lib0component133Component', () => {
  let component: Lib2Lib3Lib0component133Component;
  let fixture: ComponentFixture<Lib2Lib3Lib0component133Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib0component133Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib0component133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
