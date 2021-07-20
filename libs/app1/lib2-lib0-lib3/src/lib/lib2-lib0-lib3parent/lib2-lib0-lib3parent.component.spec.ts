import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib0Lib3parentComponent } from './lib2-lib0-lib3parent.component';

describe('Lib2Lib0Lib3parentComponent', () => {
  let component: Lib2Lib0Lib3parentComponent;
  let fixture: ComponentFixture<Lib2Lib0Lib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib0Lib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib0Lib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
