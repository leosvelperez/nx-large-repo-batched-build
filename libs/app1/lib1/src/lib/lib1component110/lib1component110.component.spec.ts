import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component110Component } from './lib1component110.component';

describe('Lib1component110Component', () => {
  let component: Lib1component110Component;
  let fixture: ComponentFixture<Lib1component110Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component110Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
