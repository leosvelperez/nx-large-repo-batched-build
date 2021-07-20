import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1component63Component } from './lib2-lib1component63.component';

describe('Lib2Lib1component63Component', () => {
  let component: Lib2Lib1component63Component;
  let fixture: ComponentFixture<Lib2Lib1component63Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1component63Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1component63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
