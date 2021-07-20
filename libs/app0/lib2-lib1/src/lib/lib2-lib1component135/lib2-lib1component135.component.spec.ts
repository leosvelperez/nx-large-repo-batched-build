import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1component135Component } from './lib2-lib1component135.component';

describe('Lib2Lib1component135Component', () => {
  let component: Lib2Lib1component135Component;
  let fixture: ComponentFixture<Lib2Lib1component135Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1component135Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1component135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
