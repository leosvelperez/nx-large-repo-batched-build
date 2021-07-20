import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2component102Component } from './lib1-lib2component102.component';

describe('Lib1Lib2component102Component', () => {
  let component: Lib1Lib2component102Component;
  let fixture: ComponentFixture<Lib1Lib2component102Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2component102Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2component102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
