import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib3parentComponent } from './lib0-lib3parent.component';

describe('Lib0Lib3parentComponent', () => {
  let component: Lib0Lib3parentComponent;
  let fixture: ComponentFixture<Lib0Lib3parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib3parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib3parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
