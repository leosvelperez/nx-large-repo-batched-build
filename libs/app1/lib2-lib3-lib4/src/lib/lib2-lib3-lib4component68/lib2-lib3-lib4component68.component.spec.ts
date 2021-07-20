import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib4component68Component } from './lib2-lib3-lib4component68.component';

describe('Lib2Lib3Lib4component68Component', () => {
  let component: Lib2Lib3Lib4component68Component;
  let fixture: ComponentFixture<Lib2Lib3Lib4component68Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib4component68Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib4component68Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
