import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component105Component } from './lib1component105.component';

describe('Lib1component105Component', () => {
  let component: Lib1component105Component;
  let fixture: ComponentFixture<Lib1component105Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component105Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
