import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib2Lib2parentComponent } from './lib0-lib2-lib2parent.component';

describe('Lib0Lib2Lib2parentComponent', () => {
  let component: Lib0Lib2Lib2parentComponent;
  let fixture: ComponentFixture<Lib0Lib2Lib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib2Lib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib2Lib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
