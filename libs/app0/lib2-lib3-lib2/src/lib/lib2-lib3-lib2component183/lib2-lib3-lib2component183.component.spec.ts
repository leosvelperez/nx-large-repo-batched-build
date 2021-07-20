import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib2component183Component } from './lib2-lib3-lib2component183.component';

describe('Lib2Lib3Lib2component183Component', () => {
  let component: Lib2Lib3Lib2component183Component;
  let fixture: ComponentFixture<Lib2Lib3Lib2component183Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib2component183Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib2component183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
