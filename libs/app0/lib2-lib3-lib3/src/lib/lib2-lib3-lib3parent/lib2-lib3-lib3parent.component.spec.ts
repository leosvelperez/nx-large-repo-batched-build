import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib3Lib3parentComponent } from './lib2-lib3-lib3parent.component';

describe('Lib2Lib3Lib3parentComponent', () => {
  let component: Lib2Lib3Lib3parentComponent;
  let fixture: ComponentFixture<Lib2Lib3Lib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib3Lib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib3Lib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
