import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib2component185Component } from './lib1-lib1-lib2component185.component';

describe('Lib1Lib1Lib2component185Component', () => {
  let component: Lib1Lib1Lib2component185Component;
  let fixture: ComponentFixture<Lib1Lib1Lib2component185Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib2component185Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib2component185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
