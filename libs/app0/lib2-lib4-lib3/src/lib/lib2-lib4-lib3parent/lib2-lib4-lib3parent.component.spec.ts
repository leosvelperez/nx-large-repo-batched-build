import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib4Lib3parentComponent } from './lib2-lib4-lib3parent.component';

describe('Lib2Lib4Lib3parentComponent', () => {
  let component: Lib2Lib4Lib3parentComponent;
  let fixture: ComponentFixture<Lib2Lib4Lib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib4Lib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib4Lib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
