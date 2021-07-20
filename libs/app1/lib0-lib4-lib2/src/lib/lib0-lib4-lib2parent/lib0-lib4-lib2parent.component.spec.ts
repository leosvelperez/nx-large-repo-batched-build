import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib4Lib2parentComponent } from './lib0-lib4-lib2parent.component';

describe('Lib0Lib4Lib2parentComponent', () => {
  let component: Lib0Lib4Lib2parentComponent;
  let fixture: ComponentFixture<Lib0Lib4Lib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib4Lib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib4Lib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
