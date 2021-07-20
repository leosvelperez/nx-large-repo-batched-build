import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component162Component } from './lib1component162.component';

describe('Lib1component162Component', () => {
  let component: Lib1component162Component;
  let fixture: ComponentFixture<Lib1component162Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component162Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
