import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1component42Component } from './lib2-lib1component42.component';

describe('Lib2Lib1component42Component', () => {
  let component: Lib2Lib1component42Component;
  let fixture: ComponentFixture<Lib2Lib1component42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1component42Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
