import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib2component158Component } from './lib2-lib3-lib2component158.component';

describe('Lib2Lib3Lib2component158Component', () => {
  let component: Lib2Lib3Lib2component158Component;
  let fixture: ComponentFixture<Lib2Lib3Lib2component158Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib2component158Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib2component158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
