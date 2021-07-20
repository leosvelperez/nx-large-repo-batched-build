import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2component194Component } from './lib1-lib2component194.component';

describe('Lib1Lib2component194Component', () => {
  let component: Lib1Lib2component194Component;
  let fixture: ComponentFixture<Lib1Lib2component194Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2component194Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2component194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
