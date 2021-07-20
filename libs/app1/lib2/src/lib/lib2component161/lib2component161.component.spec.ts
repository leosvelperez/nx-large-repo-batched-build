import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component161Component } from './lib2component161.component';

describe('Lib2component161Component', () => {
  let component: Lib2component161Component;
  let fixture: ComponentFixture<Lib2component161Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component161Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
