import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component166Component } from './lib1component166.component';

describe('Lib1component166Component', () => {
  let component: Lib1component166Component;
  let fixture: ComponentFixture<Lib1component166Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component166Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
