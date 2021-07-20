import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component176Component } from './lib1component176.component';

describe('Lib1component176Component', () => {
  let component: Lib1component176Component;
  let fixture: ComponentFixture<Lib1component176Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component176Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
