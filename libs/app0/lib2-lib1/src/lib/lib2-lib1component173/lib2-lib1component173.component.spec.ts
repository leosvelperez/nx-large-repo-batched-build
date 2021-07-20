import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1component173Component } from './lib2-lib1component173.component';

describe('Lib2Lib1component173Component', () => {
  let component: Lib2Lib1component173Component;
  let fixture: ComponentFixture<Lib2Lib1component173Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1component173Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1component173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
