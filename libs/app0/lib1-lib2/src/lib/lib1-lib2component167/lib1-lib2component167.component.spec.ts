import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2component167Component } from './lib1-lib2component167.component';

describe('Lib1Lib2component167Component', () => {
  let component: Lib1Lib2component167Component;
  let fixture: ComponentFixture<Lib1Lib2component167Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2component167Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2component167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
