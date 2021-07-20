import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component114Component } from './lib1component114.component';

describe('Lib1component114Component', () => {
  let component: Lib1component114Component;
  let fixture: ComponentFixture<Lib1component114Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component114Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
