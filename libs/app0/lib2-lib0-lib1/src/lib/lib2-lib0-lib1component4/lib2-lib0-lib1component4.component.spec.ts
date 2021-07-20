import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib1component4Component } from './lib2-lib0-lib1component4.component';

describe('Lib2Lib0Lib1component4Component', () => {
  let component: Lib2Lib0Lib1component4Component;
  let fixture: ComponentFixture<Lib2Lib0Lib1component4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib1component4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib1component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
