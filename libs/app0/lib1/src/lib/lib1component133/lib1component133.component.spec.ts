import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component133Component } from './lib1component133.component';

describe('Lib1component133Component', () => {
  let component: Lib1component133Component;
  let fixture: ComponentFixture<Lib1component133Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component133Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});