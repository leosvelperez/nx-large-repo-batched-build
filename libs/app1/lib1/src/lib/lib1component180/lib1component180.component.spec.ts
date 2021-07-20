import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component180Component } from './lib1component180.component';

describe('Lib1component180Component', () => {
  let component: Lib1component180Component;
  let fixture: ComponentFixture<Lib1component180Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component180Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
