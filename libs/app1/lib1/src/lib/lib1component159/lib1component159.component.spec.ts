import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component159Component } from './lib1component159.component';

describe('Lib1component159Component', () => {
  let component: Lib1component159Component;
  let fixture: ComponentFixture<Lib1component159Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component159Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
