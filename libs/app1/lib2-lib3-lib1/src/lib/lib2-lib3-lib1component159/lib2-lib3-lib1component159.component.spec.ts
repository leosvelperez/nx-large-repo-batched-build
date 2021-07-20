import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib1component159Component } from './lib2-lib3-lib1component159.component';

describe('Lib2Lib3Lib1component159Component', () => {
  let component: Lib2Lib3Lib1component159Component;
  let fixture: ComponentFixture<Lib2Lib3Lib1component159Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib1component159Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib1component159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
