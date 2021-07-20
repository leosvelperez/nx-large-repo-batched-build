import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1component158Component } from './lib2-lib1component158.component';

describe('Lib2Lib1component158Component', () => {
  let component: Lib2Lib1component158Component;
  let fixture: ComponentFixture<Lib2Lib1component158Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1component158Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1component158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
