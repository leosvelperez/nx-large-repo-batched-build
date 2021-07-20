import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component147Component } from './lib1component147.component';

describe('Lib1component147Component', () => {
  let component: Lib1component147Component;
  let fixture: ComponentFixture<Lib1component147Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component147Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
