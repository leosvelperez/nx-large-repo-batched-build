import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1component160Component } from './lib2-lib1component160.component';

describe('Lib2Lib1component160Component', () => {
  let component: Lib2Lib1component160Component;
  let fixture: ComponentFixture<Lib2Lib1component160Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1component160Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1component160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
