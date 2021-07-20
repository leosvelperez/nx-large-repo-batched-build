import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component143Component } from './lib1component143.component';

describe('Lib1component143Component', () => {
  let component: Lib1component143Component;
  let fixture: ComponentFixture<Lib1component143Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component143Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
