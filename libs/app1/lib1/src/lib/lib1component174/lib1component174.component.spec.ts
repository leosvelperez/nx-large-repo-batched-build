import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component174Component } from './lib1component174.component';

describe('Lib1component174Component', () => {
  let component: Lib1component174Component;
  let fixture: ComponentFixture<Lib1component174Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component174Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
