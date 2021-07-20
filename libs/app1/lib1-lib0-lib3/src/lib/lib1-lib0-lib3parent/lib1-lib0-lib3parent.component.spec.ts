import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib3parentComponent } from './lib1-lib0-lib3parent.component';

describe('Lib1Lib0Lib3parentComponent', () => {
  let component: Lib1Lib0Lib3parentComponent;
  let fixture: ComponentFixture<Lib1Lib0Lib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
