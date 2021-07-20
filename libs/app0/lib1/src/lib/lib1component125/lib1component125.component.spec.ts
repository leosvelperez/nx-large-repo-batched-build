import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component125Component } from './lib1component125.component';

describe('Lib1component125Component', () => {
  let component: Lib1component125Component;
  let fixture: ComponentFixture<Lib1component125Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component125Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
