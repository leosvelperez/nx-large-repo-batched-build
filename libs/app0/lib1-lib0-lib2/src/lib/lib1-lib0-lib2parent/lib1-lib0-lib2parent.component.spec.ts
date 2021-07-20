import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib2parentComponent } from './lib1-lib0-lib2parent.component';

describe('Lib1Lib0Lib2parentComponent', () => {
  let component: Lib1Lib0Lib2parentComponent;
  let fixture: ComponentFixture<Lib1Lib0Lib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
