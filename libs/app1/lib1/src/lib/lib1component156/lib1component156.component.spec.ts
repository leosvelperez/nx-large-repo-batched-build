import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component156Component } from './lib1component156.component';

describe('Lib1component156Component', () => {
  let component: Lib1component156Component;
  let fixture: ComponentFixture<Lib1component156Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component156Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
