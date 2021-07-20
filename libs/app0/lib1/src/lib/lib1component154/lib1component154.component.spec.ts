import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component154Component } from './lib1component154.component';

describe('Lib1component154Component', () => {
  let component: Lib1component154Component;
  let fixture: ComponentFixture<Lib1component154Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component154Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
