import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1component8Component } from './lib2-lib1component8.component';

describe('Lib2Lib1component8Component', () => {
  let component: Lib2Lib1component8Component;
  let fixture: ComponentFixture<Lib2Lib1component8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1component8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
