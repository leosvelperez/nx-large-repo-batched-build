import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib2component49Component } from './lib2-lib1-lib2component49.component';

describe('Lib2Lib1Lib2component49Component', () => {
  let component: Lib2Lib1Lib2component49Component;
  let fixture: ComponentFixture<Lib2Lib1Lib2component49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib2component49Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib2component49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});