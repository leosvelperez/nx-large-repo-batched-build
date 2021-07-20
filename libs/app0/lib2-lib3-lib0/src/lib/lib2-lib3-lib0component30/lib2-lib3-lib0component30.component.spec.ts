import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib0component30Component } from './lib2-lib3-lib0component30.component';

describe('Lib2Lib3Lib0component30Component', () => {
  let component: Lib2Lib3Lib0component30Component;
  let fixture: ComponentFixture<Lib2Lib3Lib0component30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib0component30Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib0component30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
