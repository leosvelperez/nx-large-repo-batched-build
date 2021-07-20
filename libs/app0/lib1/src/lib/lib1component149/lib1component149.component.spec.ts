import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component149Component } from './lib1component149.component';

describe('Lib1component149Component', () => {
  let component: Lib1component149Component;
  let fixture: ComponentFixture<Lib1component149Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component149Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
