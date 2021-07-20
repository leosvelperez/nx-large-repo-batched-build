import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component158Component } from './lib1component158.component';

describe('Lib1component158Component', () => {
  let component: Lib1component158Component;
  let fixture: ComponentFixture<Lib1component158Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component158Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
