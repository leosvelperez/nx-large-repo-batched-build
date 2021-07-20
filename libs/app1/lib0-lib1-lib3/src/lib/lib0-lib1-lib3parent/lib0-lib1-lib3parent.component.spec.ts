import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib3parentComponent } from './lib0-lib1-lib3parent.component';

describe('Lib0Lib1Lib3parentComponent', () => {
  let component: Lib0Lib1Lib3parentComponent;
  let fixture: ComponentFixture<Lib0Lib1Lib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
