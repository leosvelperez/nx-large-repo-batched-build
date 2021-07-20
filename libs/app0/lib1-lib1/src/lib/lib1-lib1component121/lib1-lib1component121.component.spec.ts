import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1component121Component } from './lib1-lib1component121.component';

describe('Lib1Lib1component121Component', () => {
  let component: Lib1Lib1component121Component;
  let fixture: ComponentFixture<Lib1Lib1component121Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1component121Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1component121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
