import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2component125Component } from './lib2component125.component';

describe('Lib2component125Component', () => {
  let component: Lib2component125Component;
  let fixture: ComponentFixture<Lib2component125Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2component125Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2component125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
