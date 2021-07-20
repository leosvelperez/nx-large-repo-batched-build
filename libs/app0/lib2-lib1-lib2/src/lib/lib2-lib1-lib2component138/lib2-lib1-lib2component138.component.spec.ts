import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib2component138Component } from './lib2-lib1-lib2component138.component';

describe('Lib2Lib1Lib2component138Component', () => {
  let component: Lib2Lib1Lib2component138Component;
  let fixture: ComponentFixture<Lib2Lib1Lib2component138Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib2component138Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib2component138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
