import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component95Component } from './lib2component95.component';

describe('Lib2component95Component', () => {
  let component: Lib2component95Component;
  let fixture: ComponentFixture<Lib2component95Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component95Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component95Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
