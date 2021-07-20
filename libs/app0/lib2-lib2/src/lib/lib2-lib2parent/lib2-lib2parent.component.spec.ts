import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Lib2parentComponent } from './lib2-lib2parent.component';

describe('Lib2Lib2parentComponent', () => {
  let component: Lib2Lib2parentComponent;
  let fixture: ComponentFixture<Lib2Lib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2Lib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Lib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
