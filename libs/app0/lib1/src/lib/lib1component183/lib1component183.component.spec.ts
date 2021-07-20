import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component183Component } from './lib1component183.component';

describe('Lib1component183Component', () => {
  let component: Lib1component183Component;
  let fixture: ComponentFixture<Lib1component183Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component183Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
