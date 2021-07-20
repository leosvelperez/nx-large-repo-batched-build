import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component181Component } from './lib1component181.component';

describe('Lib1component181Component', () => {
  let component: Lib1component181Component;
  let fixture: ComponentFixture<Lib1component181Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component181Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
