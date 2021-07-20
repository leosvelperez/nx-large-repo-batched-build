import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib2component59Component } from './lib1-lib1-lib2component59.component';

describe('Lib1Lib1Lib2component59Component', () => {
  let component: Lib1Lib1Lib2component59Component;
  let fixture: ComponentFixture<Lib1Lib1Lib2component59Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib2component59Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib2component59Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
