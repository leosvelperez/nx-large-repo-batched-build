import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component116Component } from './lib1component116.component';

describe('Lib1component116Component', () => {
  let component: Lib1component116Component;
  let fixture: ComponentFixture<Lib1component116Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component116Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
