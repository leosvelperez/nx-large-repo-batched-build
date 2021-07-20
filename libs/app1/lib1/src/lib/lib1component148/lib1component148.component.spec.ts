import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component148Component } from './lib1component148.component';

describe('Lib1component148Component', () => {
  let component: Lib1component148Component;
  let fixture: ComponentFixture<Lib1component148Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component148Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
