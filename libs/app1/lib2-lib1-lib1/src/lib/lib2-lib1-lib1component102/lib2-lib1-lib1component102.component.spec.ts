import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib1component102Component } from './lib2-lib1-lib1component102.component';

describe('Lib2Lib1Lib1component102Component', () => {
  let component: Lib2Lib1Lib1component102Component;
  let fixture: ComponentFixture<Lib2Lib1Lib1component102Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib1component102Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib1component102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
