import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib2component192Component } from './lib1-lib2component192.component';

describe('Lib1Lib2component192Component', () => {
  let component: Lib1Lib2component192Component;
  let fixture: ComponentFixture<Lib1Lib2component192Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib2component192Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib2component192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
