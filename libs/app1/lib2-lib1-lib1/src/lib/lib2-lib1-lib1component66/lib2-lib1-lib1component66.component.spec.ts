import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib1component66Component } from './lib2-lib1-lib1component66.component';

describe('Lib2Lib1Lib1component66Component', () => {
  let component: Lib2Lib1Lib1component66Component;
  let fixture: ComponentFixture<Lib2Lib1Lib1component66Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib1component66Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib1component66Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});