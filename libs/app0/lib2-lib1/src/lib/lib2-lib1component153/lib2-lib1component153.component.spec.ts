import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1component153Component } from './lib2-lib1component153.component';

describe('Lib2Lib1component153Component', () => {
  let component: Lib2Lib1component153Component;
  let fixture: ComponentFixture<Lib2Lib1component153Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1component153Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1component153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
