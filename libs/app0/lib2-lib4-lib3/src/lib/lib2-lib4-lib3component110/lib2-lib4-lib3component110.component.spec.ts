import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib3component110Component } from './lib2-lib4-lib3component110.component';

describe('Lib2Lib4Lib3component110Component', () => {
  let component: Lib2Lib4Lib3component110Component;
  let fixture: ComponentFixture<Lib2Lib4Lib3component110Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib3component110Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib3component110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});