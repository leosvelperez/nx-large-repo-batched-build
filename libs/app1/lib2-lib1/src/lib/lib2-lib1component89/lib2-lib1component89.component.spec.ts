import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1component89Component } from './lib2-lib1component89.component';

describe('Lib2Lib1component89Component', () => {
  let component: Lib2Lib1component89Component;
  let fixture: ComponentFixture<Lib2Lib1component89Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1component89Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1component89Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
