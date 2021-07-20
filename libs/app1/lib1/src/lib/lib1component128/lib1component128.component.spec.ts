import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component128Component } from './lib1component128.component';

describe('Lib1component128Component', () => {
  let component: Lib1component128Component;
  let fixture: ComponentFixture<Lib1component128Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component128Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
