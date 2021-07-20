import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1component29Component } from './lib2-lib1component29.component';

describe('Lib2Lib1component29Component', () => {
  let component: Lib2Lib1component29Component;
  let fixture: ComponentFixture<Lib2Lib1component29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1component29Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
