import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component129Component } from './lib1component129.component';

describe('Lib1component129Component', () => {
  let component: Lib1component129Component;
  let fixture: ComponentFixture<Lib1component129Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component129Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
