import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component190Component } from './lib1component190.component';

describe('Lib1component190Component', () => {
  let component: Lib1component190Component;
  let fixture: ComponentFixture<Lib1component190Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component190Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
