import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component141Component } from './lib1component141.component';

describe('Lib1component141Component', () => {
  let component: Lib1component141Component;
  let fixture: ComponentFixture<Lib1component141Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component141Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
