import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1component198Component } from './lib1-lib1component198.component';

describe('Lib1Lib1component198Component', () => {
  let component: Lib1Lib1component198Component;
  let fixture: ComponentFixture<Lib1Lib1component198Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1component198Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1component198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
