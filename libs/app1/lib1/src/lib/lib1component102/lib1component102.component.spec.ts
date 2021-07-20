import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component102Component } from './lib1component102.component';

describe('Lib1component102Component', () => {
  let component: Lib1component102Component;
  let fixture: ComponentFixture<Lib1component102Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component102Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
