import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib1Lib0parentComponent } from './lib2-lib1-lib0parent.component';

describe('Lib2Lib1Lib0parentComponent', () => {
  let component: Lib2Lib1Lib0parentComponent;
  let fixture: ComponentFixture<Lib2Lib1Lib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib1Lib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib1Lib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
