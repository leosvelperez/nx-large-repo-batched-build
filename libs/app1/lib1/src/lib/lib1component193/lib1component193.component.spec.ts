import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component193Component } from './lib1component193.component';

describe('Lib1component193Component', () => {
  let component: Lib1component193Component;
  let fixture: ComponentFixture<Lib1component193Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component193Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
