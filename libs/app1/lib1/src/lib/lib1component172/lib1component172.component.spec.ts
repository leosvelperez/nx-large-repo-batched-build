import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component172Component } from './lib1component172.component';

describe('Lib1component172Component', () => {
  let component: Lib1component172Component;
  let fixture: ComponentFixture<Lib1component172Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component172Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
