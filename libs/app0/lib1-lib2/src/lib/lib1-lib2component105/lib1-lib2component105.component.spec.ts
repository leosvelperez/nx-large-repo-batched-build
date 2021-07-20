import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2component105Component } from './lib1-lib2component105.component';

describe('Lib1Lib2component105Component', () => {
  let component: Lib1Lib2component105Component;
  let fixture: ComponentFixture<Lib1Lib2component105Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2component105Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2component105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
