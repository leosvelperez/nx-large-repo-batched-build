import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component107Component } from './lib1component107.component';

describe('Lib1component107Component', () => {
  let component: Lib1component107Component;
  let fixture: ComponentFixture<Lib1component107Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component107Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
