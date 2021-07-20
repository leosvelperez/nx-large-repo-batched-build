import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component121Component } from './lib1component121.component';

describe('Lib1component121Component', () => {
  let component: Lib1component121Component;
  let fixture: ComponentFixture<Lib1component121Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component121Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
