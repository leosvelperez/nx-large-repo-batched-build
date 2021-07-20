import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component188Component } from './lib1component188.component';

describe('Lib1component188Component', () => {
  let component: Lib1component188Component;
  let fixture: ComponentFixture<Lib1component188Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component188Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
